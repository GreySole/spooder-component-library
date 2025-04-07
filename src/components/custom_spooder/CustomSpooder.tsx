import React from "react";
import { useTheme } from "../../context/ThemeContext";
import TypeFace from "../layout/TypeFace";
import { StyleSizeType } from "../../Types";

interface CustomSpooderProps {
  fontSize?: StyleSizeType | string;
}

export default function CustomSpooder(props: CustomSpooderProps) {
  const { fontSize } = props;
  const { customSpooder, isMobileDevice } = useTheme();
  return (
    <TypeFace
      fontSize={fontSize ? fontSize : isMobileDevice ? "large" : "xlarge"}
    >
      <span style={{ color: customSpooder.colors.longlegleft }}>
        {customSpooder.parts.longlegleft}
      </span>
      <span style={{ color: customSpooder.colors.shortlegleft }}>
        {customSpooder.parts.shortlegleft}
      </span>
      <span style={{ color: customSpooder.colors.bodyleft }}>
        {customSpooder.parts.bodyleft}
      </span>
      <span style={{ color: customSpooder.colors.littleeyeleft }}>
        {customSpooder.parts.littleeyeleft}
      </span>
      <span style={{ color: customSpooder.colors.bigeyeleft }}>
        {customSpooder.parts.bigeyeleft}
      </span>
      <span style={{ color: customSpooder.colors.fangleft }}>
        {customSpooder.parts.fangleft}
      </span>
      <span style={{ color: customSpooder.colors.mouth }}>
        {customSpooder.parts.mouth}
      </span>
      <span style={{ color: customSpooder.colors.fangright }}>
        {customSpooder.parts.fangright}
      </span>
      <span style={{ color: customSpooder.colors.bigeyeright }}>
        {customSpooder.parts.bigeyeright}
      </span>
      <span style={{ color: customSpooder.colors.littleeyeright }}>
        {customSpooder.parts.littleeyeright}
      </span>
      <span style={{ color: customSpooder.colors.bodyright }}>
        {customSpooder.parts.bodyright}
      </span>
      <span style={{ color: customSpooder.colors.shortlegright }}>
        {customSpooder.parts.shortlegright}
      </span>
      <span style={{ color: customSpooder.colors.longlegright }}>
        {customSpooder.parts.longlegright}
      </span>
    </TypeFace>
  );
}
