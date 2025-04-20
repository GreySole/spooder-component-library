import React from "react";

interface NumberInputProps {
  key?: string;
  width?: string;
  label?: string;
  precision?: number;
  value: number;
  onInput: (value: number) => void;
  autoFocus?: boolean;
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
    value,
    onInput,
    onFocus,
    onBlur,
  } = props;

  function setPrecision(rawValue: string) {
    const value = parseFloat(rawValue);
    onInput(
      precision !== undefined ? parseFloat(value.toFixed(precision)) : value
    );
  }

  return (
    <label htmlFor={`number-${key}`}>
      {label}
      <input
        id={`number-${key}`}
        style={{ width: width }}
        className="number-input"
        type="number"
        value={value}
        autoFocus={autoFocus}
        onInput={(e) => setPrecision((e.target as HTMLInputElement).value)}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </label>
  );
}
