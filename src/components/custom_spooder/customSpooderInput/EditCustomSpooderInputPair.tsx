import React, { useEffect } from 'react';
import { get } from 'react-hook-form';
import Stack from '../../layout/Stack';
import TypeFace from '../../layout/TypeFace';
import { calculateContrastRatio } from '../../../util/ColorUtil';
import FormTextInput from '../../input/form/FormTextInput';
import Columns from '../../layout/Columns';
import FormColorInput from '../../input/form/FormColorInput';
import { SpooderPet, SpooderPetPair } from '../../../Types';

interface EditCustomSpooderInputPairProps {
  customSpooder: SpooderPetPair[];
  index: number;
}

const calculateContrastWarning = (color: string) => {
  // This function can be used to calculate contrast and return a warning if needed
  const themeBgColor = document.documentElement.style.getPropertyValue('--color-background-far');
  const contrastThreshold = 2.25;

  const chosenColor = color;

  const contrastRatio = calculateContrastRatio(chosenColor, themeBgColor);

  return contrastRatio < contrastThreshold;
};
export default function EditCustomSpooderInputPair(props: EditCustomSpooderInputPairProps) {
  const { customSpooder, index } = props;
  const themeBgColor = document.documentElement.style.getPropertyValue('--color-background-far');

  const outOfContrastRange = () => {
    return calculateContrastWarning(customSpooder[index].partColor);
  };

  return (
    <Stack spacing='small' width='160px'>
      <Stack align='center' spacing='small'>
        <FormTextInput
          width='100%'
          formKey={`parts.${index}.partString`}
          color={customSpooder[index].partColor}
          style={{ textAlign: 'center', backgroundColor: 'var(--color-background-far)' }}
        />
        <Columns width='100%' spacing='small'>
          <FormColorInput formKey={`parts.${index}.partColor`} showWarning={outOfContrastRange()} />
          <TypeFace width='106px' textAlign='center' fontWeight={'bold'}>
            {customSpooder[index].partColor}
          </TypeFace>
        </Columns>
        <TypeFace
          width='100%'
          textAlign='center'
          fontSize='smedium'
          fontWeight='bold'
          color={calculateContrastRatio(themeBgColor, '#F00') < 2 ? '#500' : '#F00'}
          lineHeight={1.1}
        >
          {outOfContrastRange() ? (
            <>This may be too close to your theme color</>
          ) : (
            <>
              &nbsp;<br></br>&nbsp;
            </>
          )}
        </TypeFace>
      </Stack>
    </Stack>
  );
}
