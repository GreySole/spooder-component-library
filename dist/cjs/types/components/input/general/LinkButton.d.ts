import React from 'react';
interface LinkButtonProps {
    width?: string;
    className?: string;
    name?: string;
    label?: string;
    iconSize?: string;
    link: string;
    mode: 'newtab' | 'copy' | 'download';
    iconOnly?: boolean;
}
export default function LinkButton(props: LinkButtonProps): React.JSX.Element;
export {};
