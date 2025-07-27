import { Properties } from 'csstype';
import React, { forwardRef, ReactNode } from 'react';
import { StyleSize, StyleSizeType } from '../../Types';
import { resolveStyleSize } from '../../util/MediaUtil';

interface GridProps {
    children: ReactNode;
    className?: string;
    width?: Properties['width'];
    height?: Properties['height'];
    minWidth?: Properties['minWidth'];
    minHeight?: Properties['minHeight'];
    maxWidth?: Properties['maxWidth'];
    maxHeight?: Properties['maxHeight'];
    alignItems?: Properties['alignItems'];
    justifyContent?: Properties['justifyContent'];
    justifyItems?: Properties['justifyItems'];
    spacing?: StyleSizeType;
    overflow?: Properties['overflow'];
    textAlign?: Properties['textAlign'];
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
    backgroundColor?: Properties['backgroundColor'];
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    columns?: number | string;
    rows?: number | string;
    style?: React.CSSProperties;
}

const Grid: React.FC<GridProps> = ({
    children,
    columns = 'auto',
    rows = 'auto',
    className = '',
    style = {},
    width,
    height,
    minWidth,
    minHeight,
    maxWidth,
    maxHeight,
    alignItems,
    justifyContent,
    justifyItems,
    spacing = '16px',
    overflow = 'scroll',
    textAlign,
    backgroundColor,
    onClick,
    ...styles
}) => {
      const paddingStyle = styles.padding
        ? {
            paddingTop: resolveStyleSize(styles.padding),
            paddingRight: resolveStyleSize(styles.padding),
            paddingBottom: resolveStyleSize(styles.padding),
            paddingLeft: resolveStyleSize(styles.padding),
          }
        : {
            paddingTop: resolveStyleSize(styles.paddingTop ?? "none"),
            paddingRight: resolveStyleSize(styles.paddingRight ?? "none"),
            paddingBottom: resolveStyleSize(styles.paddingBottom ?? "none"),
            paddingLeft: resolveStyleSize(styles.paddingLeft ?? "none"),
          };

      const marginStyle = styles.margin
        ? {
            marginTop: resolveStyleSize(styles.margin),
            marginRight: resolveStyleSize(styles.margin),
            marginBottom: resolveStyleSize(styles.margin),
            marginLeft: resolveStyleSize(styles.margin),
          }
        : {
            marginTop: resolveStyleSize(styles.marginTop ?? "none"),
            marginRight: resolveStyleSize(styles.marginRight ?? "none"),
            marginBottom: resolveStyleSize(styles.marginBottom ?? "none"),
            marginLeft: resolveStyleSize(styles.marginLeft ?? "none"),
          };
    const gridStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: typeof columns === 'number' ? `repeat(${columns}, 1fr)` : columns,
        gridTemplateRows: typeof rows === 'number' ? `repeat(${rows}, 1fr)` : rows,
        gap: spacing ? resolveStyleSize(spacing) : undefined,
        width,
        height,
        minWidth,
        minHeight,
        maxWidth,
        maxHeight,
        alignItems,
        justifyContent,
        justifyItems,
        overflow,
        textAlign,
        backgroundColor,
        ...paddingStyle,
        ...marginStyle,
    };

    return (
        <div className={`${className} grid`} style={gridStyle} onClick={onClick}>
            {children}
        </div>
    );
};

export default Grid;
