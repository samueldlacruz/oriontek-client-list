import { ModalI } from './modal.interface'

const Modal = ({ isOpen, onClose: handleClose, children, customClassNames }: ModalI) => {
	return (
		<div
			role="dialog"
			aria-modal="true"
			tabIndex={-1}
			className={`${isOpen ? 'flex' : 'hidden'} ${
				customClassNames?.container || ''
			} fixed  overflow-auto w-full h-screen top-0 left-0 justify-center z-50 items-center`}
		>
			<div
				className={`${customClassNames?.overlay || ''} bg-gray-500/25 z-10 w-full h-full absolute`.trim()}
				onClick={() => handleClose()}
			/>

			{isOpen && (
				<div
					className={`${
						customClassNames?.modal || ''
					} overflow-auto shadow-xl border bg-white z-20 h-auto w-full max-w-2xl m-auto flex justify-center items-center`.trim()}
				>
					{typeof children === 'function' ? children({ close: handleClose }) : children}
				</div>
			)}
		</div>
	)
}

export default Modal
