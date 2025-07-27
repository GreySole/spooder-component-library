import React, { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Icon from '../../media/Icon';
import { faTimes, faX } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';

interface TextInputProps {
  value: string;
  width?: string;
  label?: string;
  unit?: string;
  placeholder?: string;
  color?: string;
  charLimit?: number;
  jsonFriendly?: boolean;
  password?: boolean;
  onInput?: (value: string) => void;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  selectOnFocus?: boolean;
  autoFocus?: boolean;
  autoCapitalize?: boolean;
  autoComplete?: boolean;
  autoCorrect?: boolean;
  spellCheck?: boolean;
  readOnly?: boolean;
  style?: React.CSSProperties;
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
    onChange,
    onFocus,
    onBlur,
    color,
    selectOnFocus = false,
    autoFocus,
    autoCapitalize,
    autoComplete,
    autoCorrect,
    spellCheck,
    unit,
    readOnly = false,
    style = {},
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);

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

  function _onChange(value: string) {
    if (!onChange) return;
    if (charLimit !== undefined) {
      if (value.length > charLimit) {
        onChange(value.substring(0, charLimit));
        return;
      }
    }
    if (jsonFriendly) {
      onChange(
        value.replaceAll(/[`!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/g, '').replaceAll(' ', '_'),
      );
      return;
    }
    onChange(value);
    return;
  }

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (selectOnFocus) {
      e.currentTarget.select();
    }
    if (onFocus) onFocus();
  };

  const forIdPair = label ? `text-${label}` : `text-${uuidv4()}`;

  const handleClear = () => {
    _onInput('');
    // focus the input after clearing
    inputRef.current?.focus();
  };

  const clearButtonSpacing = unit ? unit.length : 0;

  return (
    <label htmlFor={forIdPair} data-unit={unit ? unit : undefined}>
      {label}
      <input
        ref={inputRef}
        id={forIdPair}
        className='text-input'
        placeholder={placeholder}
        type={password ? 'password' : 'text'}
        value={value}
        style={{ ...style, width, color }}
        onInput={(e) => _onInput(e.currentTarget.value)}
        onChange={(e) => _onChange(e.currentTarget.value)}
        onFocus={handleFocus}
        onBlur={onBlur}
        autoFocus={autoFocus}
        autoCapitalize={autoCapitalize ? 'on' : 'off'}
        autoComplete={autoComplete ? 'on' : 'off'}
        autoCorrect={autoCorrect ? 'on' : 'off'}
        spellCheck={spellCheck ? 'true' : 'false'}
        readOnly={readOnly}
      />
      <Button
        className='text-input-clear-button minimal'
        onClick={() => handleClear()}
        style={{ right: `calc(${clearButtonSpacing}ch + .25rem)` }}
        tooltipText='Clear input'
        icon={faTimes}
      />
    </label>
  );
}
