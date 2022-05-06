import React from 'react'
import { useForm } from 'react-hook-form'
import { Navigate, useSearchParams } from 'react-router-dom'
import { useVerifyCode } from '../../../core/welcome/modules/auth/hooks'
import Verify from './Verify'

const VerifyHoc = () => {
	const { handleSubmit, register, setError, formState, control } = useForm<{ code: string }>()
	const [searchParams] = useSearchParams()
	const email = searchParams.get('email') ?? ''
	const verifyCode = useVerifyCode({ email, setError })
	if (!email) {
		return <Navigate to={'/welcome/email'} />
	}

	const onSubmit = handleSubmit(verifyCode)
	return <Verify email={email} register={register} onSubmit={onSubmit} formState={formState} control={control} />
}

export default VerifyHoc
