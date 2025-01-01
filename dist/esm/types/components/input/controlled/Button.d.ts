import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
interface ButtonProps {
    className?: string;
    label?: string;
    width?: string;
    height?: string;
    disabled?: boolean;
    icon?: IconProp | string;
    iconSize?: string;
    iconPosition?: 'left' | 'right' | 'top' | 'bottom';
    color?: string;
    colorOnHover?: boolean;
    onClick: () => void;
}
export default function Button(props: ButtonProps): React.JSX.Element;
export {};
