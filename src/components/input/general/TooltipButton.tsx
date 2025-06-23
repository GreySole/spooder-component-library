import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { StyleSize, StyleSizeType } from '../../../Types';
import Icon from '../../media/Icon';
import { useTooltip } from '../../../context/TooltipContext';

interface TooltipButtonProps {
  tooltipText: string;
  iconSize?: string | StyleSizeType;
}

export default function TooltipButton(props: TooltipButtonProps) {
  const { tooltipText } = props;
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

  const iconSize = convertSizeToStyleSizeFont(props.iconSize ? props.iconSize : 'medium');

  return (
    <button
      style={{
        display: 'flex',
        fontSize: '1rem',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPointerEnter={showTooltip}
      onPointerLeave={hideTooltip}
    >
      <Icon icon={faQuestion} iconSize={iconSize} />
    </button>
  );
}
