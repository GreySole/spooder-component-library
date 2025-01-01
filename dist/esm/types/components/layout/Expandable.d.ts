import React, { ReactNode } from 'react';
import { StyleSizeType } from '../../Types';
interface ExpandableProps {
    label: string;
    children: ReactNode;
    fontSize?: StyleSizeType;
    forceOpen?: boolean;
}
export default function Expandable(props: ExpandableProps): React.JSX.Element;
export {};
