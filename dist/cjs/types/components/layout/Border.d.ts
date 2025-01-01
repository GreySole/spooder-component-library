import React from 'react';
import { ReactNode } from 'react';
interface BorderProps {
    children: ReactNode;
    borderTop?: boolean;
    borderRight?: boolean;
    borderBottom?: boolean;
    borderLeft?: boolean;
    borderColor?: string;
    borderWidth?: string;
    borderStyle?: string;
}
export default function Border(props: BorderProps): React.JSX.Element;
export {};
