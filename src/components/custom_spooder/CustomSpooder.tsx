import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import TypeFace from '../layout/TypeFace';
import { StyleSizeType } from '../../Types';

interface CustomSpooderProps {
  fontSize?: StyleSizeType | string;
}

export default function CustomSpooder(props: CustomSpooderProps) {
  const { fontSize } = props;
  const { customSpooder, isMobileDevice } = useTheme();

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
        <span style={{ color: part.partColor }} key={`spooder-header-part-${index}`}>
          {replaceCharacters(part.partString)}
        </span>
      ))}
      {/* <span style={{ color: customSpooder.partColors.longlegleft }}>
        {customSpooder.partStrings.longlegleft}
      </span>
      <span style={{ color: customSpooder.partColors.shortlegleft }}>
        {customSpooder.partStrings.shortlegleft}
      </span>
      <span style={{ color: customSpooder.partColors.bodyleft }}>
        {customSpooder.partStrings.bodyleft}
      </span>
      <span style={{ color: customSpooder.partColors.littleeyeleft }}>
        {customSpooder.partStrings.littleeyeleft}
      </span>
      <span style={{ color: customSpooder.partColors.bigeyeleft }}>
        {customSpooder.partStrings.bigeyeleft}
      </span>
      <span style={{ color: customSpooder.partColors.fangleft }}>
        {customSpooder.partStrings.fangleft}
      </span>
      <span style={{ color: customSpooder.partColors.mouth }}>
        {customSpooder.partStrings.mouth}
      </span>
      <span style={{ color: customSpooder.partColors.fangright }}>
        {customSpooder.partStrings.fangright}
      </span>
      <span style={{ color: customSpooder.partColors.bigeyeright }}>
        {customSpooder.partStrings.bigeyeright}
      </span>
      <span style={{ color: customSpooder.partColors.littleeyeright }}>
        {customSpooder.partStrings.littleeyeright}
      </span>
      <span style={{ color: customSpooder.partColors.bodyright }}>
        {customSpooder.partStrings.bodyright}
      </span>
      <span style={{ color: customSpooder.partColors.shortlegright }}>
        {customSpooder.partStrings.shortlegright}
      </span>
      <span style={{ color: customSpooder.partColors.longlegright }}>
        {customSpooder.partStrings.longlegright}
      </span> */}
    </TypeFace>
  );
}
