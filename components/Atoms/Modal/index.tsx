import { ModalI } from './modal.interface'

function Modal({ isOpen, onClose, children, customClassNames }: ModalI) {
	const handleClose = (ev: React.SyntheticEvent) => {
		if (ev.target === ev.currentTarget) {
			onClose()
		}
	}

	return (
		<>
			{isOpen && (
				<div
					className={`${
						customClassNames?.container ? customClassNames.container : ''
					} fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50 flex`}
					onClick={handleClose}
				>
					<div
						className={`${
							customClassNames?.modal ? customClassNames.modal : ''
						} relative bg-white w-full max-w-lg m-auto flex-col flex`}
					>
						{typeof children === 'function' ? children({ close: onClose }) : children}
					</div>
				</div>
			)}
		</>
	)
}

export default Modal
