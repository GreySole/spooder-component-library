import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { StyleSize } from '../../Types';
import SvgIcon from './SvgIcon';
import { useTheme } from '../../context/ThemeContext';
import ImageFile from './ImageFile';

interface IconProps {
  icon: IconProp | string;
  iconSize?: string;
  iconColor?: string;
  fallbackIcon?: IconProp;
  clip?: 'circle' | 'square';
}

export default function Icon(props: IconProps) {
  const { icon, iconSize, fallbackIcon, clip } = props;
  const { themeVariables } = useTheme();
  const [hasError, setHasError] = useState(false);

  const iconColor = props.iconColor || (themeVariables.isDarkTheme ? 'white' : 'black');

  const handleError = () => {
    setHasError(true);
  };
  const isDarkTheme = themeVariables.isDarkTheme;

  let clipPath = undefined;
  if (clip === 'circle') {
    clipPath = 'circle(50% at 50% 50%)';
  } else if (clip === 'square') {
    clipPath = 'inset(0px round 10%)';
  }

  const size = iconSize
    ? iconSize in StyleSize
      ? StyleSize[iconSize as keyof typeof StyleSize]
      : iconSize
    : '2rem';

  if ((!icon || hasError) && fallbackIcon) {
    return <FontAwesomeIcon icon={fallbackIcon} style={{ width: size, height: size }} />;
  } else if ((!icon || hasError) && !fallbackIcon) {
    return null;
  }

  if (typeof icon === 'object' && 'icon' in icon) {
    // If icon is a FontAwesome icon prop
    return (
      <FontAwesomeIcon
        icon={icon}
        style={{ width: size, height: size, clipPath: clipPath, pointerEvents: 'none' }}
        color={iconColor}
        onError={() => {
          handleError();
        }}
      />
    );
  } else if (typeof icon === 'string') {
    if (icon.endsWith('.svg')) {
      // If icon is a React component
      return (
        <SvgIcon
          fill={iconColor}
          width={size}
          height={size}
          src={icon}
          onError={() => {
            handleError();
          }}
        />
      );
    }
    // If icon is a string (URL)
    return (
      <ImageFile
        src={icon}
        width={size}
        height={size}
        clip={clip}
        onError={() => {
          handleError();
        }}
      />
    );
  }

  return null;
}
