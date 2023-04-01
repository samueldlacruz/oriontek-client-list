import { ReactNode } from 'react'

const Footer = ({ children }: { children: ReactNode }) => (
	<footer className="border-t-2  bg-white leading-4 p-4 bottom-0 fixed w-full">{children}</footer>
)

export default Footer
