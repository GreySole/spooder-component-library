import React from 'react';
import { useTooltip } from '../../../context/TooltipContext';

interface BoolSwitchProps {
  label?: string;
  value: boolean;
  onChange: (value: boolean) => void;
  tooltipText?: string;
}

export default function BoolSwitch(props: BoolSwitchProps) {
  const { label, value, onChange, tooltipText = '' } = props;
  const { showTip, hideTip } = useTooltip();

  const showTooltip = () => {
    showTip(tooltipText);
  };

  const hideTooltip = () => {
    hideTip();
  };

  return (
    <label className={value ? 'boolswitch checked' : 'boolswitch'} htmlFor={`bool-${label}`}>
      {label}
      <input
        id={`bool-${label}`}
        type='checkbox'
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
        onPointerEnter={tooltipText ? showTooltip : undefined}
        onPointerLeave={tooltipText ? hideTooltip : undefined}
      />
    </label>
  );
}
