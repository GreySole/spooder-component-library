import React from "react";

interface TextAreaInputProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  autoFocus?: boolean;
  autoCapitalize?: boolean;
  autoComplete?: boolean;
  autoCorrect?: boolean;
  spellCheck?: boolean;
}

export default function TextAreaInput(props: TextAreaInputProps) {
  const {
    label,
    value,
    autoFocus,
    autoCapitalize,
    autoComplete,
    autoCorrect,
    spellCheck,
    onFocus,
    onBlur,
    onChange,
  } = props;
  return (
    <label htmlFor={`textarea-${label}`}>
      {label}
      <textarea
        id={`textarea-${label}`}
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
        autoFocus={autoFocus}
        autoCapitalize={autoCapitalize ? "on" : "off"}
        autoComplete={autoComplete ? "on" : "off"}
        autoCorrect={autoCorrect ? "on" : "off"}
        spellCheck={spellCheck ? "true" : "false"}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}
