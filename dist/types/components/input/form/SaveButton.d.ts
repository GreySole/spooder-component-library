import React from 'react';
import { FieldValues } from 'react-hook-form';
interface SaveButtonProps {
    saveFunction: (form: FieldValues) => void;
}
export default function SaveButton(props: SaveButtonProps): React.JSX.Element;
export {};
