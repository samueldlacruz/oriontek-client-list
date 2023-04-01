import Head from 'next/head'
import { ReactNode } from 'react'
import Header from './Atoms/Header'
import Footer from './Atoms/Footer'

type Props = {
	children?: ReactNode
	title?: string
}

const Layout = ({ children, title = 'Client Panel' }: Props) => (
	<div>
		<Head>
			<title>{title}</title>
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</Head>
		<Header logoSrc="svgs/users.svg" appName="Clients Panel" />

		<div className="bg-gray-200/50">{children}</div>

		<Footer>
			<div className="flex w-full my-3 justify-between">
				<article>
					<span className="pr-4">Client Panel</span>
					<span className="font-medium">X Company</span>
				</article>

				<div>
					<strong>copyright &copy; {new Date().getFullYear()}</strong>
				</div>
			</div>
		</Footer>
	</div>
)

export default Layout
