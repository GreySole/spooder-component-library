import React, { useEffect } from 'react';
import { faTriangleExclamation, faPalette } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { v4 as uuidv4 } from 'uuid';
import { calculateContrastRatio } from '../../../util/ColorUtil';
import { SketchPicker } from 'react-color';
import type { ColorResult } from 'react-color';
import { useTheme } from '../../../context/ThemeContext';

interface ColorInputProps {
  label?: string;
  value: string;
  onChange: (color: string) => void;
  showWarning?: boolean;
  className?: string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
}

export default function ColorInput(props: ColorInputProps) {
  const { label, value, onChange, showWarning, className, placement } = props;
  const [color, setColor] = React.useState({ hex: value, r: 0, g: 0, b: 0, a: 1 });
  const [pickerVisible, setPickerVisible] = React.useState(false);
  const { themeVariables } = useTheme();

  useEffect(() => {
    // See if there is a picker that is already open
    const handleClickOutside = (event: MouseEvent) => {
      if (
        pickerVisible &&
        event.target &&
        !(event.target as Element).closest('.color-input-container')
      ) {
        setPickerVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [pickerVisible]);

  useEffect(() => {
    // Update color state when value prop changes
    if (value) {
      const newColor = { hex: value, r: 0, g: 0, b: 0, a: 1 }; // Default RGB values
      setColor(newColor);
    }
  }, [value]);

  const forIdPair = label ? `color-${label}` : `color-${uuidv4()}`;

  const handleColorChange = (newColor: ColorResult) => {
    let newColorResult = structuredClone(color);
    newColorResult.hex = newColor.hex;
    newColorResult.r = newColor.rgb.r;
    newColorResult.g = newColor.rgb.g;
    newColorResult.b = newColor.rgb.b;

    setColor(newColorResult);
    onChange(newColorResult.hex);
  };

  return (
    <label htmlFor={forIdPair} className={className}>
      {label}
      <div className='color-input-container'>
        <input
          type='color'
          value={color.hex}
          id={forIdPair}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
          onFocus={(e) => {
            e.stopPropagation();
            setPickerVisible(true);
          }}
          readOnly
        />
        {pickerVisible && (
          <SketchPicker
            color={color}
            onChange={handleColorChange}
            disableAlpha
            presetColors={[]}
            styles={{
              default: {
                picker: {
                  position: 'absolute',
                  zIndex: 1000,
                  color: 'var(--color-text)',
                  border: '1px solid var(--color-text)',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
                  borderRadius: '8px',
                  padding: '4px',
                  background: themeVariables.isDarkTheme ? '#111' : '#FFF',
                },
                color: {
                  width: '36px',
                  height: '14px',
                  borderRadius: '4px',
                  background: `rgb(${color.r}, ${color.g}, ${color.b})`,
                },
                controls: {
                  color: 'var(--color-text)',
                },
              },
            }}
          />
        )}
        {showWarning ? (
          <FontAwesomeIcon
            icon={faTriangleExclamation}
            color={calculateContrastRatio(value, '#F00') < 2 ? '#500' : '#F00'}
            className='color-input-icon'
          />
        ) : (
          <FontAwesomeIcon
            icon={faPalette}
            className='color-input-icon'
            color={calculateContrastRatio(value, '#FFF') < 4.5 ? '#000' : '#FFF'}
          />
        )}
      </div>
    </label>
  );
}
