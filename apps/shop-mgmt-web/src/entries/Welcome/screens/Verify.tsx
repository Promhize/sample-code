import React from 'react'
import { FieldValues } from 'react-hook-form'
import { Button, ControlledMaskedTextField, Stack } from 'ui'
import { FormComponentProps } from '../../../types'

type Props = {
	email: string
} & FormComponentProps<{ code: string }>

const Verify = ({ email, register, onSubmit, formState: { errors }, control }: Props) => {
	const { ref: codeRef, ...codeRegisterProps } = register('code')
	return (
		<div>
			<form
				onSubmit={onSubmit}
				className="w-96"
			>
				<Stack
					tokens={{
						childrenGap: 20,
					}}
				>
					<h1 className=" text-4xl">Verify login</h1>
					<p>
						We&apos;ve sent a 6-digit code to{' '}
						<a href="mailto:" className="underline">
							{email}
						</a>
						, please enter it below
					</p>

					<Stack horizontal>
						<ControlledMaskedTextField<{ code: string } & FieldValues>
							inputProps={{
								label: '6-digit code',
								mask: ' ******',
								maskChar: '-',
								styles: {
									field: {
										textTransform: 'uppercase',
										height: '64px',
										textAlign: 'center',
										fontSize: '24px',
										lineHeight: '64px',
										letterSpacing: '36px',
									},
									fieldGroup: {
										height: '64px',
									},
								},
								className: 'w-full',
								required: true,
								autoFocus: true,
								errorMessage: errors?.code?.message,
								...codeRegisterProps,
							}}
							controllerProps={{
								control,
								...codeRegisterProps,
							}}
						// ComponentRef={codeRef}
						/>
					</Stack>
					<Button text="Continue" type="submit" />
				</Stack>
			</form>
		</div>)
}

export default Verify
