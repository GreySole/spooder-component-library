import React from "react";
interface RangeInputProps {
    label?: string;
    min: number;
    max: number;
    step?: number;
    value: number;
    showValue?: boolean;
    vertical?: boolean;
    onChange: (value: number) => void;
}
export default function RangeInput(props: RangeInputProps): React.JSX.Element;
export {};
