import React, { useState } from "react";
import { useFormContext } from "react-hook-form";

interface NumberInputProps {
  formKey: string;
  width?: string;
  label?: string;
  precision?: number;
  autoFocus?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
}

export default function FormNumberInput(props: NumberInputProps) {
  const { formKey, width, label, precision, autoFocus, onBlur, onFocus } =
    props;
  const { watch, register } = useFormContext();
  const value = watch(formKey);

  function setPrecision(value: number) {
    return precision !== undefined ? value.toFixed(precision) : value;
  }

  return (
    <label htmlFor={`number-${formKey}`}>
      {label}
      <input
        id={`number-${formKey}`}
        style={{ width: width }}
        className="number-input"
        type="number"
        value={value}
        {...register(formKey, {
          valueAsNumber: true,
          setValueAs: setPrecision,
        })}
        autoFocus={autoFocus}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </label>
  );
}
