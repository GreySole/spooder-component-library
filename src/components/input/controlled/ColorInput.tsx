import React from 'react';
import { v4 as uuidv4 } from 'uuid';

interface ColorInputProps {
  label?: string;
  value: string;
  onChange: (color: string) => void;
}

export default function ColorInput(props: ColorInputProps) {
  const { label, value, onChange } = props;

  const forIdPair = label ? `color-${label}` : `color-${uuidv4()}`;

  return (
    <label htmlFor={forIdPair}>
      {label}
      <input type='color' value={value} onChange={(e) => onChange(e.target.value)} id={forIdPair} />
    </label>
  );
}
