import React from 'react';

interface RangeInputProps {
  label?: string;
  min: number;
  max: number;
  step?: number;
  value: number;
  showValue?: boolean;
  vertical?: boolean;
  onChange: (value: number) => void;
}

export default function RangeInput(props: RangeInputProps) {
  const { label, min, max, step, value, showValue, vertical, onChange } = props;

  const forIdPair = label ? `range-${label}` : `range-${crypto.randomUUID()}`;
  return (
    <label className={'range-label' + (vertical ? ' vertical' : '')} htmlFor={forIdPair}>
      {label}
      <input
        id={forIdPair}
        className={'range-input' + (vertical ? ' vertical' : '')}
        type='range'
        min={min}
        max={max}
        step={step}
        defaultValue={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
      />
      {showValue ? value : null}
    </label>
  );
}
