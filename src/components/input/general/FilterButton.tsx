import React, { useState, useRef, useEffect } from 'react';
import { FilterProps } from '../../../Types';
import Button from '../controlled/Button';
import Icon from '../../media/Icon';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

interface FilterButtonProps {
  options: FilterProps[];
  selectedOptions: string[];
  onChange: (selected: string[]) => void;
}

export default function FilterButton({ options, selectedOptions, onChange }: FilterButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownAbove, setDropdownAbove] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen && buttonRef.current && dropdownRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const dropdownRect = dropdownRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (buttonRect.bottom + dropdownRect.height > viewportHeight) {
        setDropdownAbove(true);
      } else {
        setDropdownAbove(false);
      }
    }
  }, [isOpen]);

  const handleToggleOption = (option: FilterProps) => {
    const currentIndex = selectedOptions.indexOf(option.value);
    const newSelectedOptions = [...selectedOptions];
    console.log('TOGGLE OPTION', option, currentIndex);
    if (currentIndex === -1) {
      newSelectedOptions.push(option.value);
    } else {
      newSelectedOptions.splice(currentIndex, 1);
    }

    onChange(newSelectedOptions);
  };

  return (
    <div className='filter-button'>
      <button ref={buttonRef} onClick={handleToggleDropdown}>
        Filter <Icon icon={faFilter} iconSize='medium' />
      </button>
      {isOpen && (
        <div ref={dropdownRef} className={`dropdown ${dropdownAbove ? 'above' : 'below'}`}>
          {options.map((option) => (
            <Button
              className='dropdown-item'
              width='100%'
              label={option.label}
              onClick={() => handleToggleOption(option)}
              icon={option.icon}
              iconSize='medium'
              iconPosition='left'
              color={
                selectedOptions.indexOf(option.value) === -1
                  ? 'var(--color-background-far)'
                  : 'var(--button-background-color)'
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}
