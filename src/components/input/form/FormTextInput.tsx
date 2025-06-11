import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { text } from "stream/consumers";

interface TextInputProps {
  formKey: string;
  width?: string;
  label?: string;
  placeholder?: string;
  color?: string;
  charLimit?: number;
  jsonFriendly?: boolean;
  password?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  autoFocus?: boolean;
  autoCapitalize?: boolean;
  autoComplete?: boolean;
  autoCorrect?: boolean;
  spellCheck?: boolean;
  style?: React.CSSProperties;
}

export default function FormTextInput(props: TextInputProps) {
  const {
    formKey,
    label,
    width,
    placeholder,
    charLimit,
    jsonFriendly,
    password,
    onFocus,
    onBlur,
    color,
    autoFocus,
    autoCapitalize,
    autoComplete,
    autoCorrect,
    spellCheck,
    style = {},
  } = props;
  const { register } = useFormContext();

  function _onInput(value: string) {
    if (charLimit !== undefined) {
      if (value.length > charLimit) {
        return value.substring(0, charLimit);
      }
    }
    if (jsonFriendly) {
      return value
        .replaceAll(/[`!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/g, "")
        .replaceAll(" ", "_");
    }
    return value;
  }

  const forIdPair = label ? `text-${label}` : `text-${formKey}`;

  return (
    <label htmlFor={forIdPair}>
      {label}
      <input
        id={forIdPair}
        style={{ ...style, width, color }}
        className="text-input"
        placeholder={placeholder}
        type={password ? "password" : "text"}
        {...register(formKey, { setValueAs: _onInput })}
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
