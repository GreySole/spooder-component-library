import React from 'react';
import { SelectOption } from '../../../Types';
interface SelectDropdownProps {
    label?: string;
    options: SelectOption[];
    value: string;
    onChange: (value: string) => void;
}
export default function SelectDropdown(props: SelectDropdownProps): React.JSX.Element;
export {};
