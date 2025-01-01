import React from 'react';
import { ReactNode } from 'react';
import { StyleSizeType } from '../../Types';
import { Properties } from 'csstype';
interface StackProps {
    children: ReactNode;
    spacing: StyleSizeType;
    width?: Properties['width'];
    height?: Properties['height'];
    dividers?: boolean;
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
export default function Stack(props: StackProps): React.JSX.Element;
export {};
