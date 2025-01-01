import { IconProp } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
interface MediaExtensions {
    [key: string]: string[];
}
export declare function getIcon(icon: IconProp | string, isDarkTheme: boolean, size?: string): React.JSX.Element | null;
export declare const mediaExtensions: MediaExtensions;
export declare function getMediaHTML(filePath: string): React.JSX.Element | undefined;
export declare function getMediaType(file: string): string | null;
export {};
