import React from 'react';
interface TextInputProps {
    formKey: string;
    width?: string;
    label?: string;
    placeholder?: string;
    charLimit?: number;
    jsonFriendly?: boolean;
    password?: boolean;
}
export default function FormTextInput(props: TextInputProps): React.JSX.Element;
export {};
