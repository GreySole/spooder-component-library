import React from "react";
interface ColorInputProps {
    label?: string;
    value: string;
    onChange: (color: string) => void;
}
export default function ColorInput(props: ColorInputProps): React.JSX.Element;
export {};
