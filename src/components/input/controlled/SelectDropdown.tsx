import React from "react";
import { SelectOption } from "../../../Types";
import { useTheme } from "../../../context/ThemeContext";

interface SelectDropdownProps {
  label?: string;
  width?: string;
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
}

export default function SelectDropdown(props: SelectDropdownProps) {
  const { label, width, options, value, onChange } = props;
  const { themeVariables } = useTheme();

  return (
    <label htmlFor={`select-${label}`}>
      {label}
      <select
        id={`select-${label}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: width,
          textOverflow: "ellipsis",
          fontSize: "1.25rem",
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${
            themeVariables.isDarkTheme ? "%23ffffff" : "%23000000"
          }" width="18px" height="18px"><path d="M7 10l5 5 5-5z"/></svg>')`,
        }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
