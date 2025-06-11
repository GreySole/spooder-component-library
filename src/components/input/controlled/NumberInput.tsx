import React from 'react';
import { v4 as uuidv4 } from 'uuid';

interface NumberInputProps {
  key?: string;
  width?: string;
  label?: string;
  precision?: number;
  value: number;
  unit?: string;
  onInput: (value: number) => void;
  autoFocus?: boolean;
  selectOnFocus?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
}

export default function NumberInput(props: NumberInputProps) {
  const {
    key,
    width,
    label,
    precision,
    autoFocus,
    selectOnFocus = false,
    value,
    onInput,
    onFocus,
    onBlur,
    unit,
  } = props;

  function setPrecision(rawValue: string) {
    const value = parseFloat(rawValue);
    onInput(precision !== undefined ? parseFloat(value.toFixed(precision)) : value);
  }

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (selectOnFocus) {
      e.currentTarget.select();
    }
    if (onFocus) onFocus();
  };

  const forIdPair = label ? `number-${label}` : `number-${key || uuidv4()}`;

  return (
    <label htmlFor={forIdPair} data-unit={unit ? unit : undefined}>
      {label}
      <input
        id={forIdPair}
        style={{ width: width }}
        className='number-input'
        type='number'
        value={value}
        autoFocus={autoFocus}
        onInput={(e) => setPrecision((e.target as HTMLInputElement).value)}
        onFocus={handleFocus}
        onBlur={onBlur}
      />
    </label>
  );
}
