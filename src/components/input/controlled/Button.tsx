import { IconProp } from '@fortawesome/fontawesome-svg-core';
import React, { useEffect, useRef, useState } from 'react';
import { useTooltip } from '../../../context/TooltipContext';
import { StyleSize, StyleSizeButton, StyleSizeType } from '../../../Types';
import Icon from '../../media/Icon';

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
  fontSize?: string | StyleSizeType;
  iconGap?: string | StyleSizeType;
  iconPosition?: 'left' | 'right' | 'top' | 'bottom';
  color?: string;
  colorOnHover?: boolean;
  truncate?: boolean;
  onClick: () => void;
  onLongPress?: () => void;
  tooltipText?: string;
  style?: React.CSSProperties;
}

export default function Button(props: ButtonProps) {
  const {
    className,
    label,
    disabled,
    icon,
    iconColor,
    fallbackIcon,
    iconPosition,
    onClick,
    onLongPress,
    color,
    colorOnHover,
    truncate,
    tooltipText = '',
    style,
  } = props;

  const [isHovered, setIsHovered] = useState(false);
  const longPressTimeout = useRef<NodeJS.Timeout | null>(null);
  const { showTip, hideTip } = useTooltip();
  // hideTip's identity changes every render (TooltipProvider isn't memoized), so it's read
  // through a ref rather than listed as an effect dependency - that would tear the unmount
  // cleanup below down and rebuild it on every render instead of only at unmount.
  const hideTipRef = useRef(hideTip);
  hideTipRef.current = hideTip;
  // Whether THIS button is the one currently showing the (single, app-wide) tooltip - so the
  // unmount cleanup below only hides it if this instance owns it, rather than hiding whatever
  // unrelated button's tooltip happens to be open elsewhere.
  const isTipShowingRef = useRef(false);

  const showTooltip = () => {
    isTipShowingRef.current = true;
    showTip(tooltipText);
  };

  const hideTooltip = () => {
    isTipShowingRef.current = false;
    hideTip();
  };

  const handlePointerEnter = () => {
    if (tooltipText) {
      showTooltip();
    }
  };

  const handlePointerLeave = () => {
    if (tooltipText) {
      hideTooltip();
    }
    cancelLongPress();
  };

  // A click often removes this button from the tree before any pointerleave can fire (e.g. it
  // becomes disabled, or its parent stops rendering it once the action completes) - the pointer
  // is still physically over the cursor's old position, but there's no element left to leave,
  // so its tooltip would otherwise stay on screen until something else happens to hide it.
  useEffect(() => {
    return () => {
      if (isTipShowingRef.current) {
        hideTipRef.current();
      }
    };
  }, []);

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
  const fontSize = convertSizeToStyleSizeFont(props.fontSize ? props.fontSize : 'medium');

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

  // Pointer events (not mouse events) so this works for touch/pen as well as
  // mouse: on touch devices, synthetic mousedown/mouseup fire late (often not
  // until after touchend), which broke the long-press timer entirely.
  const handlePointerDown = () => {
    longPressTimeout.current = setTimeout(() => {
      if (onLongPress) {
        onLongPress();
        longPressTimeout.current = null;
      }
    }, 500); // 500ms threshold for long press
  };

  const handlePointerUp = () => {
    if (longPressTimeout.current) {
      clearTimeout(longPressTimeout.current);
      longPressTimeout.current = null;
      onClick();
    }
  };

  const cancelLongPress = () => {
    if (longPressTimeout.current) {
      clearTimeout(longPressTimeout.current);
      longPressTimeout.current = null;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
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
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerLeave}
      onPointerCancel={cancelLongPress}
      disabled={disabled ?? false}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      onPointerEnter={handlePointerEnter}
      onKeyDown={handleKeyDown}
      style={{
        width,
        height,
        display: 'flex',
        gap: iconGap,
        flexFlow,
        fontSize: fontSize,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colorOnHover ? (isHovered ? color : undefined) : color,
        userSelect: 'none',
        ...style,
      }}
    >
      {label ? <span style={truncateStyle}>{label}</span> : null}
      {icon ? (
        <Icon icon={icon} iconSize={iconSize} fallbackIcon={fallbackIcon} iconColor={iconColor} />
      ) : null}
    </button>
  );
}
