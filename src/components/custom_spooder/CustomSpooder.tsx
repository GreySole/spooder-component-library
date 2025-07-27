import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import TypeFace from '../layout/TypeFace';
import { StyleSizeType } from '../../Types';

interface CustomSpooderProps {
  fontSize?: StyleSizeType | string;
}

export default function CustomSpooder(props: CustomSpooderProps) {
  const { fontSize } = props;
  const { customSpooder, isMobileDevice, themeVariables } = useTheme();

  // Replace problematic characters with HTML entities
  const replaceCharacters = (str: string) => {
    const newStr = str
      // replaces spaces with non-breaking space unicode character
      .replaceAll(/ /g, '\u00A0');

    return newStr;
  };

  return (
    <TypeFace fontSize={fontSize ? fontSize : isMobileDevice ? 'large' : 'xlarge'}>
      {customSpooder.map((part, index) => (
        <span
          style={{
            color: part.partColor,
            fontWeight: themeVariables.fontWeight,
            fontVariationSettings: `'MONO' ${themeVariables.isMonospacedFont ? 1 : 0}`,
            letterSpacing: `${themeVariables.letterSpacing / 2}em`,
          }}
          key={`spooder-header-part-${index}`}
        >
          {replaceCharacters(part.partString)}
        </span>
      ))}
    </TypeFace>
  );
}
