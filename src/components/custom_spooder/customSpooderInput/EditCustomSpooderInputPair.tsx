import React, { ReactNode, useEffect } from 'react';
import { get } from 'react-hook-form';
import TypeFace from '../../layout/TypeFace';
import { calculateContrastRatio } from '../../../util/ColorUtil';
import FormTextInput from '../../input/form/FormTextInput';
import Stack from '../../layout/Stack';
import Columns from '../../layout/Columns';
import { useToast } from '../../../context/ToastContext';
import Box from '../../layout/Box';
import FormColorInput from '../../input/form/FormColorInput';
import { SpooderPet, SpooderPetPair } from '../../../Types';
import Button from '../../input/controlled/Button';
import { faGripHorizontal, faPlus, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';
import Icon from '../../media/Icon';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DraggableProvided,
  DraggableProvidedDragHandleProps,
} from 'react-beautiful-dnd';

interface EditCustomSpooderInputPairProps {
  customSpooder: SpooderPetPair[];
  setCustomSpooder: (spooder: SpooderPetPair[]) => void;
  index: number;
  dragHandle: DraggableProvidedDragHandleProps | undefined | null;
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
  const { customSpooder, setCustomSpooder, index, dragHandle } = props;
  const themeBgColor = document.documentElement.style.getPropertyValue('--color-background-far');
  const { showError } = useToast();

  const outOfContrastRange = () => {
    return calculateContrastWarning(customSpooder[index].partColor);
  };

  const AddPartLeft = () => {
    // Logic to add a part to the left

    const newPart: SpooderPetPair = {
      partString: '',
      partColor: '#FFFFFF',
    };

    let newCustomSpooder = [...customSpooder];
    newCustomSpooder.splice(index, 0, newPart);

    console.log('New Custom Spooder', newCustomSpooder);

    setCustomSpooder(newCustomSpooder);
  };

  const RemovePart = () => {
    // Logic to remove the part
    if (customSpooder.length <= 1) {
      console.warn('Cannot remove the last part');
      showError('Cannot remove the last part');
      return;
    }

    let newCustomSpooder = [...customSpooder];
    newCustomSpooder.splice(index, 1);

    console.log('New Custom Spooder', newCustomSpooder);

    setCustomSpooder(newCustomSpooder);
  };

  const AddPartRight = () => {
    // Logic to add a part to the right
    const newPart: SpooderPetPair = {
      partString: '',
      partColor: '#FFFFFF',
    };
    let newCustomSpooder = [...customSpooder];
    newCustomSpooder.splice(index + 1, 0, newPart);

    setCustomSpooder(newCustomSpooder);
  };

  return (
    <Stack align='center' spacing='small' width='160px'>
      <Box width='100%' flexFlow='row' justifyContent='space-between' alignItems='center'>
        <Button
          onClick={AddPartLeft}
          icon={faPlus}
          iconSize='medium'
          tooltipText='Add Part Left'
          className='clear-button'
        ></Button>
        <div {...dragHandle}>
          <Icon icon={faGripHorizontal} iconSize='medium' />
        </div>
        <Button
          onClick={RemovePart}
          icon={faTrash}
          iconSize='medium'
          tooltipText='Remove Part'
          className='clear-button'
          color='var(--color-delete-border)'
        ></Button>
        <Button
          onClick={AddPartRight}
          icon={faPlus}
          iconSize='medium'
          tooltipText='Add Part Right'
          className='clear-button'
        ></Button>
      </Box>
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
  );
}
