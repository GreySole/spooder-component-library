import React, { useState } from "react";
import { useFormContext } from "react-hook-form";

interface TextInputProps {
  formKey: string;
  width?: string;
  label?: string;
  placeholder?: string;
  charLimit?: number;
  jsonFriendly?: boolean;
  password?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
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
  return (
    <label htmlFor={`text-${label}`}>
      {label}
      <input
        id={`text-${label}`}
        style={{ width: width, fontSize: "1rem" }}
        className="text-input"
        placeholder={placeholder}
        type={password ? "password" : "text"}
        {...register(formKey, { setValueAs: _onInput })}
        onFocus={() => onFocus}
        onBlur={() => onBlur}
      />
    </label>
  );
}
