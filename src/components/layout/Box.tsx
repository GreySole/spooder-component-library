import { Properties } from "csstype";
import React, { forwardRef, ReactNode } from "react";
import { StyleSize, StyleSizeType } from "../../Types";
import { resolveStyleSize } from "../../util/MediaUtil";

interface BoxProps {
  children: ReactNode;
  className?: string;
  width?: Properties["width"];
  height?: Properties["height"];
  minWidth?: Properties["minWidth"];
  minHeight?: Properties["minHeight"];
  maxWidth?: Properties["maxWidth"];
  maxHeight?: Properties["maxHeight"];
  flexFlow?: Properties["flexFlow"];
  alignItems?: Properties["alignItems"];
  justifyContent?: Properties["justifyContent"];
  overflow?: Properties["overflow"];
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
  backgroundColor?: Properties["backgroundColor"];
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default forwardRef<HTMLDivElement, BoxProps>(function Box(
  {
    children,
    className,
    onClick,
    width,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    height,
    flexFlow,
    alignItems,
    justifyContent,
    overflow,
    ...styles
  },
  ref
) {
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

  return (
    <div
      className={"box " + (className ? className : "")}
      ref={ref}
      onClick={onClick}
      style={{
        display: "flex",
        flexFlow: flexFlow || undefined,
        alignItems: alignItems || undefined,
        justifyContent: justifyContent || undefined,
        width: width || undefined,
        height: height || undefined,
        minWidth: minWidth || undefined,
        minHeight: minHeight || undefined,
        maxWidth: maxWidth || undefined,
        maxHeight: maxHeight || undefined,
        boxSizing: "border-box",
        overflow: overflow || undefined,
        backgroundColor: styles.backgroundColor || undefined,
        ...paddingStyle,
        ...marginStyle,
      }}
    >
      {children}
    </div>
  );
});
