import React from 'react';
interface SearchBarProps {
    placeholder?: string;
    onSearch: (searchText: string) => void;
}
export default function SearchBar({ placeholder, onSearch }: SearchBarProps): React.JSX.Element;
export {};
