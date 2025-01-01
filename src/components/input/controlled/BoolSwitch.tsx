import React from 'react';

interface BoolSwitchProps {
  key?: string;
  label?: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

export default function BoolSwitch(props: BoolSwitchProps) {
  const { key, label, value, onChange } = props;

  return (
    <label className={value ? 'boolswitch checked' : 'boolswitch'} htmlFor={`bool-${key}`}>
      {label}
      <input
        id={`bool-${key}`}
        type='checkbox'
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
      />
    </label>
  );
}
