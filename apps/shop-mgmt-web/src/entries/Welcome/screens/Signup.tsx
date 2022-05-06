import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, TextField } from 'ui'
import { FormComponentProps } from '../../../types'

export type SignupFields = {
	firstName: string
	lastName: string
	phoneNumber: string
	email: string
}

type Props = {
	phoneNumber?: string
	email?: string | null
} & FormComponentProps<SignupFields>

const commonProps = { required: true, validateOnFocusOut: true }

export const signupFieldNames = ['firstName', 'lastName', 'phoneNumber', 'email'] as const

const Signup = ({ phoneNumber, email, register, onSubmit }: Props) => {
	const [
		firstRegisterProps,
		lastNameRegisterProps,
		phoneNumberRegisterProps,
		emailRegisterProps,
	] = signupFieldNames.map((name: typeof signupFieldNames[number]) => {
		const { ref, ...registerProps } = register(name)
		return {
			componentRef: ref,
			...registerProps,
		}
	})
	return (
		<>
			<form onSubmit={onSubmit} className="w-96">
				<Stack
					tokens={{
						childrenGap: 20,
					}}
				>
					<h1 className=" text-4xl">Sign up</h1>
					<Stack
						horizontal
						tokens={{
							childrenGap: 20,
						}}
						className="flex"
					>
						<TextField
							label="First Name"
							autoFocus
							{...commonProps}
							styles={{ root: ['w-1/2'] }}
							{...firstRegisterProps}
						/>
						<TextField
							label="Last Name"
							{...commonProps}
							styles={{ root: ['w-1/2'] }}
							{...lastNameRegisterProps}
						/>
					</Stack>
					{[
						<TextField
							key="phone_number"
							label="Phone number"
							type="text"
							prefix="+234"
							placeholder="08011122233"
							value={phoneNumber || undefined}
							disabled={Boolean(phoneNumber)}
							{...commonProps}
							{...phoneNumberRegisterProps}
						/>,
						<TextField
							key="email"
							label="Email"
							type="email"
							autoComplete="username"
							value={email || undefined}
							disabled={Boolean(email)}
							{...commonProps}
							{...emailRegisterProps}
						/>,
					][phoneNumber ? 'reverse' : 'slice']()}
					<Button text="Sign up" type="submit" />
				</Stack>
			</form>
			<div className="w-96 flex items-center mt-5">
				<span className="mr-2">Already have an account?</span>
				<Link
					title="Log in"
					to={'/welcome/email'}
					className=" text-blue-500 font-bold underline"
				>
					Log in
				</Link>
			</div>
		</>
	)
}

export default Signup
