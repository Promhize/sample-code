import React from 'react'
import './index.css'
import { createRoot } from 'react-dom/client'
import Routes from './Routes'
import { BrowserRouter } from 'react-router-dom'
import { colors, initializeIcons, PartialTheme, ThemeProvider } from 'ui'
import { QueryClient, QueryClientProvider } from 'react-query'

initializeIcons()

const client = new QueryClient()
const appTheme: PartialTheme = {
	palette: {
		themePrimary: colors.primary,
	},
	fonts: {
		medium: {
			fontFamily: '\'Tex Gyre Heros\', sans-serif',
		},
	},
}

const App = () => (
	<QueryClientProvider client={client}>
		<BrowserRouter>
			<ThemeProvider theme={appTheme}>
				<Routes />
			</ThemeProvider>
		</BrowserRouter>
	</QueryClientProvider>
)

const root = createRoot(document.getElementById('root')!)
root.render(<App />)

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
	import.meta.hot.accept()
}
