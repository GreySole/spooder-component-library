import React from 'react';
interface ButtonRowButton {
    icon: any;
    iconSize: string;
    color?: string;
    isLink?: boolean;
    linkName?: string;
    link?: string;
    isActive?: boolean;
    onClick?: () => void;
}
interface ButtonRowProps {
    buttons: ButtonRowButton[];
}
export default function ButtonRow(props: ButtonRowProps): React.JSX.Element;
export {};
