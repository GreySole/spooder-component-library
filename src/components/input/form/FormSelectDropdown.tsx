import React from "react";
import { useFormContext } from "react-hook-form";
import { SelectOption, StyleSize } from "../../../Types";
import { useTheme } from "../../../context/ThemeContext";

interface SelectDropdownProps {
  formKey: string;
  width?: string;
  label?: string;
  options: SelectOption[];
}

export default function FormSelectDropdown(props: SelectDropdownProps) {
  const { formKey, width, label, options } = props;
  const { watch, register } = useFormContext();
  const { themeVariables } = useTheme();
  const value = watch(formKey);

  return (
    <label htmlFor={`select-${formKey}`}>
      {label}
      <select
        id={`select-${formKey}`}
        value={value}
        style={{
          width: width,
          textOverflow: "ellipsis",
          fontSize: "1.25rem",
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${
            themeVariables.isDarkTheme ? "%23ffffff" : "%23000000"
          }" width="18px" height="18px"><path d="M7 10l5 5 5-5z"/></svg>')`,
        }}
        {...register(formKey, { valueAsNumber: typeof value === "number" })}
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
