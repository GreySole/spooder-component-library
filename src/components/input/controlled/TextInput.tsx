import React from 'react';
import { v4 as uuidv4 } from 'uuid';

interface TextInputProps {
  value: string;
  width?: string;
  label?: string;
  unit?: string;
  placeholder?: string;
  charLimit?: number;
  jsonFriendly?: boolean;
  password?: boolean;
  onInput?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  selectOnFocus?: boolean;
  autoFocus?: boolean;
  autoCapitalize?: boolean;
  autoComplete?: boolean;
  autoCorrect?: boolean;
  spellCheck?: boolean;
  readOnly?: boolean;
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
    selectOnFocus = false,
    autoFocus,
    autoCapitalize,
    autoComplete,
    autoCorrect,
    spellCheck,
    unit,
    readOnly = false,
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
      onInput(value.replaceAll(/[`!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/g, '').replaceAll(' ', '_'));
      return;
    }
    onInput(value);
    return;
  }

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (selectOnFocus) {
      e.currentTarget.select();
    }
    if (onFocus) onFocus();
  };

  const forIdPair = label ? `text-${label}` : `text-${uuidv4()}`;

  return (
    <label htmlFor={forIdPair} data-unit={unit ? unit : undefined}>
      {label}
      <input
        id={forIdPair}
        className='text-input'
        placeholder={placeholder}
        type={password ? 'password' : 'text'}
        value={value}
        style={{ width: width }}
        onInput={(e) => _onInput(e.currentTarget.value)}
        onFocus={handleFocus}
        onBlur={onBlur}
        autoFocus={autoFocus}
        autoCapitalize={autoCapitalize ? 'on' : 'off'}
        autoComplete={autoComplete ? 'on' : 'off'}
        autoCorrect={autoCorrect ? 'on' : 'off'}
        spellCheck={spellCheck ? 'true' : 'false'}
        readOnly={readOnly}
      />
    </label>
  );
}
