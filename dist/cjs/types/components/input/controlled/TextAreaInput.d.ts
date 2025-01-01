import React from "react";
interface TextAreaInputProps {
    label?: string;
    value: string;
    onChange: (value: string) => void;
}
export default function TextAreaInput(props: TextAreaInputProps): React.JSX.Element;
export {};
