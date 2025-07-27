import { Properties } from 'csstype';
import React, { ReactNode } from 'react';
import { StyleSize, StyleSizeType } from '../../Types';
import { resolveStyleSize } from '../../util/MediaUtil';

interface TypeFaceProps {
  children: ReactNode;
  color?: Properties['color'];
  fontSize?: StyleSizeType | string;
  fontWeight?: Properties['fontWeight'];
  textAlign?: Properties['textAlign'];
  fontFamily?: Properties['fontFamily'];
  lineHeight?: Properties['lineHeight'];
  letterSpacing?: Properties['letterSpacing'];
  textTransform?: Properties['textTransform'];
  textDecoration?: Properties['textDecoration'];
  whiteSpace?: Properties['whiteSpace'];
  wordBreak?: Properties['wordBreak'];
  wordSpacing?: Properties['wordSpacing'];
  textShadow?: Properties['textShadow'];
  textOverflow?: Properties['textOverflow'];
  userSelect?: Properties['userSelect'];
  truncate?: boolean;
  width?: Properties['width'];
}

export default function TypeFace({ children, ...styles }: TypeFaceProps) {
  const fontSize = styles.fontSize ? resolveStyleSize(styles.fontSize) : '1rem';
  const truncateStyle = styles.truncate
    ? {
        width: styles.width,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }
    : {};

  let content: React.ReactNode = (
    <span
      style={{
        ...styles,
        ...truncateStyle,
        fontSize,
      }}
    >
      {children}
    </span>
  );

  switch (styles.fontSize) {
    case 'xlarge':
      content = (
        <h1
          style={{
            ...styles,
            ...truncateStyle,
            fontSize,
          }}
        >
          {children}
        </h1>
      );
      break;
    case 'large':
      content = (
        <h2
          style={{
            ...styles,
            ...truncateStyle,
            fontSize,
          }}
        >
          {children}
        </h2>
      );
      break;
    case 'medium':
      content = (
        <h3
          style={{
            ...styles,
            ...truncateStyle,
            fontSize,
          }}
        >
          {children}
        </h3>
      );
      break;
    case 'smedium':
      content = (
        <h4
          style={{
            ...styles,
            ...truncateStyle,
            fontSize,
          }}
        >
          {children}
        </h4>
      );
      break;
    // Add more cases as needed for other font sizes
    default:
      // Use <span> as default
      break;
  }

  return content;
}
