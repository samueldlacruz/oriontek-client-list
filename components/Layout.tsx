import Head from 'next/head'
import { ReactNode } from 'react'
import Header from './Atoms/Header'
import Footer from './Atoms/Footer'

type Props = {
	children?: ReactNode
	title?: string
}

const currentYear = new Date().getFullYear()

const Layout = ({ children, title = 'Client Panel' }: Props) => (
	<div>
		<Head>
			<title>{title}</title>
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</Head>
		<Header logoSrc="svgs/users.svg" appName="Clients Panel" />

		<main className="h-full">{children}</main>

		<Footer>
			<div className="flex md:flex-row flex-col w-full my-2 justify-between">
				<article className="mb-2">
					<span className="pr-4">Client Panel</span>
					<span className="font-medium">X Company</span>
				</article>

				<div>
					<strong>copyright &copy; {currentYear}</strong>
				</div>
			</div>
		</Footer>
	</div>
)

export default Layout
