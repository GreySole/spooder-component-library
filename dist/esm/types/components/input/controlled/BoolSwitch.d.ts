import React from 'react';
interface BoolSwitchProps {
    key?: string;
    label?: string;
    value: boolean;
    onChange: (value: boolean) => void;
}
export default function BoolSwitch(props: BoolSwitchProps): React.JSX.Element;
export {};
