import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { calculateContrastRatio } from '../../../util/ColorUtil';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

interface TextInputProps {
  formKey: string;
  label?: string;
  showWarning?: boolean;
}

export default function FormColorInput(props: TextInputProps) {
  const { formKey, label, showWarning } = props;
  const { watch, register } = useFormContext();
  const value = watch(formKey);

  const forIdPair = label ? `color-${label}` : `color-${formKey}`;

  return (
    <label htmlFor={forIdPair}>
      {label}
      <div className="color-input-container">
        <input type='color' value={value} id={forIdPair} {...register(formKey)} />
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
