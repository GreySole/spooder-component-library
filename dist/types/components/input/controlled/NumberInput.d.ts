import React from "react";
interface NumberInputProps {
    key?: string;
    label?: string;
    precision?: number;
    value: number;
    onInput: (value: number) => void;
}
export default function NumberInput(props: NumberInputProps): React.JSX.Element;
export {};
