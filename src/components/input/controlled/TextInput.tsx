import React from "react";

interface TextInputProps {
  value: string;
  width?: string;
  label?: string;
  placeholder?: string;
  charLimit?: number;
  jsonFriendly?: boolean;
  password?: boolean;
  onInput?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export default function TextInput(props: TextInputProps) {
  const {
    value,
    label,
    width,
    placeholder,
    charLimit,
    jsonFriendly,
    password,
    onInput,
    onFocus,
    onBlur,
  } = props;
  function _onInput(value: string) {
    if (!onInput) return;
    if (charLimit !== undefined) {
      if (value.length > charLimit) {
        onInput(value.substring(0, charLimit));
        return;
      }
    }
    if (jsonFriendly) {
      onInput(
        value
          .replaceAll(/[`!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/g, "")
          .replaceAll(" ", "_")
      );
      return;
    }
    onInput(value);
    return;
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
        value={value}
        onInput={(e) => _onInput(e.currentTarget.value)}
        onFocus={() => onFocus}
        onBlur={() => onBlur}
      />
    </label>
  );
}
