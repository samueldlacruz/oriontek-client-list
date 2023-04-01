import '../styles/global.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Clients List App</title>
      </Head>
   
        <Component {...pageProps} />
    </>
  )

}

export default MyApp
