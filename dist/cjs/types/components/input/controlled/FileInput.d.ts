import React from 'react';
interface FileInputProps {
    label?: string;
    fileType: string;
    onChange: (files: FileList) => void;
}
export default function FileInput(props: FileInputProps): React.JSX.Element;
export {};
