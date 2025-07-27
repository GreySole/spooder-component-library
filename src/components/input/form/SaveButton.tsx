import React from 'react';
import { FieldValues, useFormContext } from 'react-hook-form';
import Button from '../controlled/Button';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';

interface SaveButtonProps {
  saveFunction: (form: FieldValues) => void;
}

export default function SaveButton(props: SaveButtonProps) {
  const { getValues } = useFormContext();
  const { saveFunction } = props;

  return (
    <Button label='Save' icon={faFloppyDisk} className='save-button' onClick={() => saveFunction(getValues())} />
  );
}
