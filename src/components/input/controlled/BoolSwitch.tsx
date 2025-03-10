import React from "react";

interface BoolSwitchProps {
  label?: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

export default function BoolSwitch(props: BoolSwitchProps) {
  const { label, value, onChange } = props;

  return (
    <label
      className={value ? "boolswitch checked" : "boolswitch"}
      htmlFor={`bool-${label}`}
    >
      {label}
      <input
        id={`bool-${label}`}
        type="checkbox"
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
      />
    </label>
  );
}
