import { ReactNode } from 'react'

const Header = ({ children, appName, logoSrc }: { children?: ReactNode; appName?: string; logoSrc: string }) => {
	return (
		<header>
			<nav className="bg-white/75 border-gray-200 px-4 lg:px-6 py-2.5 shadow-sm border-b-2">
				<div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
					<div className="flex items-center">
						{logoSrc && <img src={logoSrc} className="mr-3 h-6 sm:h-9" alt={`${appName} Logo`} />}
						<span className="self-center text-xl font-semibold whitespace-nowrap">{appName}</span>
					</div>
					{children}
				</div>
			</nav>
		</header>
	)
}

export default Header
