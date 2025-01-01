import React from 'react';
import { FilterProps } from '../../../Types';
interface FilterButtonProps {
    options: FilterProps[];
    selectedOptions: string[];
    onChange: (selected: string[]) => void;
}
export default function FilterButton({ options, selectedOptions, onChange }: FilterButtonProps): React.JSX.Element;
export {};
