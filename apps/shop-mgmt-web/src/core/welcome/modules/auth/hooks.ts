import Briph, { AxiosResponse } from 'briph-sdk'
import { useCallback } from 'react'
import { FormProviderProps } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { briph } from '../../../../lib/helpers'

export const useSendCode = () => {
	const navigate = useNavigate()
	const sendCode = useCallback(async ({ email }) => {
		await Briph.handleRequests({
			requests: [
				{
					request: async () =>
						briph.client.admin
							.findMany({
								data: { options: { filter: { emailAddress: { eq: email } } } },
							})
							.__start(),
					handlers: {
						async 200(response) {
							const { data } = response as AxiosResponse
							if (data[0]?.data.administrators.totalItems > 0) {
								// Do something
								await Briph.handleRequests({
									requests: [
										{
											request: async () =>
												briph.client.auth
													.sendCode({ data: { email } })
													.__start(),
											handlers: {
												async 200() {
													navigate(`/welcome/verify?email=${email}`)
												},
											},
										},
									],
								})
							} else {
								navigate(`/welcome/signup?email=${email}`)
							}
						},
					},
				},
			],
		})
	}, [])

	return sendCode
}

export const useVerifyCode = ({
	email,
	setError,
}: { email: string; setError: FormProviderProps<{ code: string }>['setError'] }) => {
	const navigate = useNavigate()
	const verifyCode = useCallback(async (data: { code: string }) => {
		const code = data.code.toUpperCase().replace(/[^a-zA-Z0-9]/g, '')

		if (code.length < 6) {
			return setError('code', {
				message: 'Incomplete code, expected 6-digit code',
			})
		}

		await Briph.handleRequests({
			requests: [
				{
					request: async () =>
						briph.client.auth.verifyCode({ data: { code, email } }).__start(),
					handlers: {
						async 406() {
							setError('code', { message: 'Wrong code' })
						},
						async 200() {
							const { searchParams } = new URL(location.href)
							if (`${searchParams.get('n_u')}` === '1') {
								await Briph.handleRequests({
									requests: [
										{
											request: async () =>
												briph.client.admin
													.create({
														data: {
															input: {
																firstName: searchParams.get('firstName')!,
																emailAddress: searchParams.get('email')!,
																lastName: searchParams.get('lastName')!,
																password: '',
																roleIds: [],
															},
														},
													})
													.start(),
											handlers: {
												200() { },
											},
										},
									],
								})
							}

							navigate('/stores')
						},
					},
				},
			],
		})
	}, [])

	return verifyCode
}
