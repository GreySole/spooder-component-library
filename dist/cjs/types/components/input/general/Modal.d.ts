import React, { ReactNode } from 'react';
interface ModalPage {
    title: string;
    content: ReactNode;
}
interface ModalProps {
    title: string;
    pages: ModalPage[];
    footerContent: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}
export default function Modal({ title, pages, isOpen, onClose, footerContent }: ModalProps): React.JSX.Element | null;
export {};
