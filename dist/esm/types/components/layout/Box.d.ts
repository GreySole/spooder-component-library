import { Properties } from 'csstype';
import React, { ReactNode } from 'react';
import { StyleSizeType } from '../../Types';
interface BoxProps {
    children: ReactNode;
    classes?: string[];
    width?: Properties['width'];
    height?: Properties['height'];
    flexFlow?: Properties['flexFlow'];
    alignItems?: Properties['alignItems'];
    justifyContent?: Properties['justifyContent'];
    overflow?: Properties['overflow'];
    padding?: StyleSizeType | string;
    paddingTop?: StyleSizeType | string;
    paddingRight?: StyleSizeType | string;
    paddingBottom?: StyleSizeType | string;
    paddingLeft?: StyleSizeType | string;
    margin?: StyleSizeType | string;
    marginTop?: StyleSizeType | string;
    marginRight?: StyleSizeType | string;
    marginBottom?: StyleSizeType | string;
    marginLeft?: StyleSizeType | string;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}
declare const _default: React.ForwardRefExoticComponent<BoxProps & React.RefAttributes<HTMLDivElement>>;
export default _default;
