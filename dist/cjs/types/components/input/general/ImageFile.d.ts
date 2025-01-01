import React from 'react';
interface ImageProps {
    src: string;
    width?: string;
    height?: string;
    alt?: string;
    fallbackIcon?: any;
    clip?: 'circle' | 'square';
}
export default function ImageFile({ src, width, height, alt, fallbackIcon, clip, }: ImageProps): React.JSX.Element;
export {};
