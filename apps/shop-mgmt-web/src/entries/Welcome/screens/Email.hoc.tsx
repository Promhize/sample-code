import React from 'react'
import { useForm } from 'react-hook-form'
import Email from './Email'
import { useSendCode } from '../../../core/welcome/modules/auth/hooks'

const EmailHoc = () => {
	const { register, handleSubmit, formState, control } = useForm<{ email: string }>()
	const sendCode = useSendCode()
	const onSubmit = handleSubmit(sendCode)
	return <Email register={register} onSubmit={onSubmit} formState={formState} control={control} />
}

export default EmailHoc
