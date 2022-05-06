import React from 'react'
import { FieldValues } from 'react-hook-form'
import { Button, ControlledTextField, Stack } from 'ui'
import { FormComponentProps } from '../../../types'

const commonProps = { required: true, validateOnFocusOut: true }

type Props = FormComponentProps<{ email: string }>

const Email = ({ register, onSubmit, control }: Props) => {
	const { ref, ...registerProps } = register('email')
	return (
		<form onSubmit={onSubmit} className="w-96">
			<Stack
				tokens={{
					childrenGap: 20,
				}}
			>
				<h1 className=" text-4xl">Welcome</h1>
				<ControlledTextField<{ email: string } & FieldValues>
					inputProps={{
						label: 'E-mail',
						type: 'email',
						autoComplete: 'username',
						placeholder: 'name@email.com',
						autoFocus: true,
						...commonProps,
						...registerProps,
					}}
					controllerProps={{
						control,
						...registerProps,
					}}
				/>
				<Button text="Continue" type="submit" />
			</Stack>
		</form>
	)
}

export default Email
