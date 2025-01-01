import React from 'react';
interface FormRangeInputProps {
    formKey: string;
    label?: string;
    min: number;
    max: number;
    step?: number;
    showValue?: boolean;
}
export default function FormRangeInput(props: FormRangeInputProps): React.JSX.Element;
export {};
