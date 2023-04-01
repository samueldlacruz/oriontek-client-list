import { ReactNode } from 'react'

export interface ModalI {
	isOpen: boolean
	onClose: () => void
	customClassNames?: ModalCustomClassNamesI
	children: ModalChildrenI | ReactNode
}

export interface ModalChildrenI {
	(props: ModalChildrenPropsI): React.ReactElement
}

export interface ModalChildrenPropsI {
	close: () => void
}

export interface ModalCustomClassNamesI {
	overlay?: string
	modal?: string
	container?: string
}
