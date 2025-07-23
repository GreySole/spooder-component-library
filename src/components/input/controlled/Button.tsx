import React, { useRef, useState } from 'react';
import { icon, IconProp } from '@fortawesome/fontawesome-svg-core';
import { useTheme } from '../../../context/ThemeContext';
import { StyleSize, StyleSizeButton, StyleSizeType } from '../../../Types';
import Icon from '../../media/Icon';
import { useTooltip } from '../../../context/TooltipContext';

interface ButtonProps {
  className?: string;
  label?: string;
  width?: string;
  height?: string;
  disabled?: boolean;
  icon?: IconProp | string;
  iconColor?: string;
  fallbackIcon?: IconProp;
  iconSize?: string | StyleSizeType;
  iconGap?: string | StyleSizeType;
  iconPosition?: 'left' | 'right' | 'top' | 'bottom';
  color?: string;
  colorOnHover?: boolean;
  truncate?: boolean;
  onClick: () => void;
  onLongPress?: () => void;
  tooltipText?: string;
}

export default function Button(props: ButtonProps) {
  const {
    className,
    label,
    //width,
    //height,
    disabled,
    icon,
    iconColor,
    fallbackIcon,
    //iconSize,
    //iconGap = "1rem",
    iconPosition,
    onClick,
    onLongPress,
    color,
    colorOnHover,
    truncate,
    tooltipText = '',
  } = props;
  const { themeVariables } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const longPressTimeout = useRef<NodeJS.Timeout | null>(null);
  const { showTip, hideTip } = useTooltip();

  const showTooltip = () => {
    showTip(tooltipText);
  };

  const hideTooltip = () => {
    hideTip();
  };

  function convertSizeToStyleSizeFont(size: string | StyleSizeType | undefined) {
    if (!size) {
      return undefined;
    }
    if (Object.keys(StyleSize).includes(size as StyleSize)) {
      return StyleSize[size as StyleSizeType];
    }
    return size;
  }

  function convertSizeToStyleSizeButton(size: string | StyleSizeType | undefined) {
    if (!size) {
      return undefined;
    }
    if (Object.keys(StyleSize).includes(size as StyleSize)) {
      return StyleSizeButton[size as StyleSizeType];
    }
    return size;
  }

  const width = convertSizeToStyleSizeButton(props.width);
  const height = convertSizeToStyleSizeButton(props.height);
  const iconSize = convertSizeToStyleSizeFont(props.iconSize ? props.iconSize : 'medium');
  const iconGap = convertSizeToStyleSizeFont(props.iconGap ? props.iconGap : '1rem');

  let flexFlow = 'left';

  switch (iconPosition) {
    case 'right':
      flexFlow = 'row';
      break;
    case 'left':
      flexFlow = 'row-reverse';
      break;
    case 'bottom':
      flexFlow = 'column';
      break;
    case 'top':
      flexFlow = 'column-reverse';
      break;
  }

  const handleMouseDown = () => {
    longPressTimeout.current = setTimeout(() => {
      if (onLongPress) {
        onLongPress();
        longPressTimeout.current = null;
      }
    }, 500); // 500ms threshold for long press
  };

  const handleMouseUp = () => {
    if (longPressTimeout.current) {
      clearTimeout(longPressTimeout.current);
      longPressTimeout.current = null;
      onClick();
    }
  };

  const handleMouseLeave = () => {
    if (longPressTimeout.current) {
      clearTimeout(longPressTimeout.current);
      longPressTimeout.current = null;
    }
  };

  const truncateStyle = truncate
    ? {
        width,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }
    : {};

  return (
    <button
      className={className}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      disabled={disabled ?? false}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      onPointerEnter={tooltipText ? showTooltip : undefined}
      onPointerLeave={tooltipText ? hideTooltip : undefined}
      style={{
        width,
        height,
        display: 'flex',
        gap: iconGap,
        flexFlow,
        fontSize: '1rem',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colorOnHover ? (isHovered ? color : undefined) : color,
      }}
    >
      {label ? <span style={truncateStyle}>{label}</span> : null}
      {icon ? <Icon icon={icon} iconSize={iconSize} fallbackIcon={fallbackIcon} iconColor={iconColor} /> : null}
    </button>
  );
}
