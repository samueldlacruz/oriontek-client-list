import { ReactNode } from 'react'

const Footer = ({ children }: { children: ReactNode }) => (
	<footer className="border-2 mt-auto h-[5rem] bg-white leading-4 p-4 w-full">{children}</footer>
)

export default Footer
