import Briph from 'briph-sdk'
import { briph } from './helpers'

export default {
	auth: {
		isLoggedIn: async (): Promise<{ loggedIn: boolean }> => Briph.handleRequests({
			requests: [
				{
					request: async () =>
						briph.client.admin
							.findMany({ data: {} })
							.start(),
					handlers: {
						200: () => ({ loggedIn: true }),
						4: () => ({ loggedIn: false }),
					},
				},
			],
		}),
	},
}
