import React from 'react';
import { useFormContext } from 'react-hook-form';
import Button from '../controlled/Button';
export default function ResetButton() {
  const { reset } = useFormContext();

  return <Button label='Reset' onClick={() => reset()} />;
}
