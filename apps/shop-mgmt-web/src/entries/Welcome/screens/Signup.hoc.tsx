import Briph from 'briph-sdk'
import React from 'react'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom'
import { briph } from '../../../lib/helpers'
import Signup, { signupFieldNames, SignupFields } from './Signup'

const SignupHoc = () => {
	const navigate = useNavigate()
	const { handleSubmit, register, formState } = useForm<SignupFields>()
	const [searchParams] = useSearchParams()
	const email = searchParams.get('email')
	if (!email) {
		return <Navigate to={'/welcome/email'} />
	}

	const sendCode = useCallback(async data => {
		const url = new URL(location.href)
		Object.keys(data).forEach(key => {
			url.searchParams.append(key, data[key as typeof signupFieldNames[number]])
		})
		url.searchParams.append('n_u', '1')
		await Briph.handleRequests({
			requests: [{
				request: async () => briph.client.auth.sendCode({ data: { email: data.email } }).__start(),
				handlers: {
					200() {
						navigate(`/welcome/verify?${url.searchParams.toString()}`)
					},
				},
			}],
		})
	}, [])
	const onSubmit = handleSubmit(sendCode)

	return <Signup email={email} onSubmit={onSubmit} register={register} formState={formState} />
}

export default SignupHoc
