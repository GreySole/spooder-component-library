import { faTriangleExclamation, faPalette } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { calculateContrastRatio } from '../../../util/ColorUtil';

interface ColorInputProps {
  label?: string;
  value: string;
  onChange: (color: string) => void;
  showWarning?: boolean;
}

export default function ColorInput(props: ColorInputProps) {
  const { label, value, onChange, showWarning } = props;

  const forIdPair = label ? `color-${label}` : `color-${uuidv4()}`;

  return (
    <label htmlFor={forIdPair}>
      {label}

      <div className='color-input-container'>
        <input
          type='color'
          value={value}
          onChange={(e) => onChange(e.target.value)}
          id={forIdPair}
        />
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
