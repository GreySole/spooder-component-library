import React from 'react';
import { ReactNode } from 'react';
import { StyleSizeType } from '../../Types';
import { Properties } from 'csstype';
interface ColumnsProps {
    children: ReactNode;
    spacing: StyleSizeType;
    overflow?: Properties['overflow'];
    width?: Properties['width'];
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    padding?: StyleSizeType;
    paddingTop?: StyleSizeType;
    paddingRight?: StyleSizeType;
    paddingBottom?: StyleSizeType;
    paddingLeft?: StyleSizeType;
    margin?: StyleSizeType;
    marginTop?: StyleSizeType;
    marginRight?: StyleSizeType;
    marginBottom?: StyleSizeType;
    marginLeft?: StyleSizeType;
}
export default function Columns(props: ColumnsProps): React.JSX.Element;
export {};
