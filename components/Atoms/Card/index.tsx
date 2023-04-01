import { CardI } from './card.interface'

const Card = ({ Title, Footer, className, children }: CardI) => {
	return (
		<div className={`${className ? className : ''} mt-4 border border-gray-300 rounded bg-white`}>
			{Title && (
				<div className="p-4">
					{typeof Title === 'string' ? <h1 className="text-2xl font-medium mb-4">{Title}</h1> : Title}
				</div>
			)}
			{children}
			{Footer && (
				<>
					<hr />
					<div className="w-full">{Footer}</div>
				</>
			)}
		</div>
	)
}

export default Card
