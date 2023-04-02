import '../styles/global.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import ClientProvider from '../context/clients/clients.context'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Clients List App</title>
			</Head>

			<ClientProvider>
				<Component {...pageProps} />
			</ClientProvider>
		</>
	)
}

export default MyApp
