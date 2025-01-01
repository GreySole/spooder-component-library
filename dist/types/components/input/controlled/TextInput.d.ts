import React from "react";
interface TextInputProps {
    value: string;
    width?: string;
    label?: string;
    placeholder?: string;
    charLimit?: number;
    jsonFriendly?: boolean;
    password?: boolean;
    onInput?: (value: string) => void;
}
export default function TextInput(props: TextInputProps): React.JSX.Element;
export {};
