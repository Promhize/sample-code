import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
const fs = require('fs')

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), checker({
		typescript: true,
		eslint: {
			lintCommand: 'eslint src --ext .ts,.tsx --quiet',
		},
	}), viteCommonjs()],
	define: {
		'process.env': process.env,
	},
	server: {
		port: 3007,
	},
	// Server: {
	// 	https: {
	// 		key: fs.readFileSync('./.cert/localhost+2-key.pem'),
	// 		cert: fs.readFileSync('./.cert/localhost+2.pem'),
	// 	},
	// },
})
