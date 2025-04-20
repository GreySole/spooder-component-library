import React from "react";
import { useFormContext } from "react-hook-form";

interface FormTextAreaInputProps {
  formKey: string;
  label?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  autoFocus?: boolean;
  autoCapitalize?: boolean;
  autoComplete?: boolean;
  autoCorrect?: boolean;
  spellCheck?: boolean;
}

export default function FormTextAreaInput(props: FormTextAreaInputProps) {
  const {
    formKey,
    label,
    autoFocus,
    autoCapitalize,
    autoComplete,
    autoCorrect,
    spellCheck,
    onFocus,
    onBlur,
  } = props;
  const { register, watch } = useFormContext();
  const value = watch(formKey, "");
  return (
    <label htmlFor={`textarea-${formKey}`}>
      {label}
      <textarea
        id={`textarea-${formKey}`}
        value={value}
        {...register(formKey)}
        onFocus={onFocus}
        onBlur={onBlur}
        autoFocus={autoFocus}
        autoCapitalize={autoCapitalize ? "on" : "off"}
        autoComplete={autoComplete ? "on" : "off"}
        autoCorrect={autoCorrect ? "on" : "off"}
        spellCheck={spellCheck ? "true" : "false"}
      />
    </label>
  );
}
