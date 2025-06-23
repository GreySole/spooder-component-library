import { faX } from '@fortawesome/free-solid-svg-icons';
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from '@emotion/styled';
import { Button, TypeFace, Box, Columns } from '../components';

// Define the shape of the dialog context
interface DialogContextType {
  isOpen: boolean;
  openDialog: (title: string, content: ReactNode, buttons: ReactNode[]) => void;
  closeDialog: () => void;
}

// Create the context with a default value
const DialogContext = createContext<DialogContextType | undefined>(undefined);

// Styled Components
const DialogOverlay = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => (props.isOpen ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)')};
  z-index: 1000;
  transition: background-color 0.3s ease;
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
`;

const DialogWindow = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 25%;
  max-width: 80%;
  max-height: 80%;
  top: 50%;
  left: 50%;
  background-color: var(--color-background-far);
  border: solid 2px var(--button-border-color);
  transform: translate(-50%, -50%);
  border-radius: 8px;
`;

const DialogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
  background-color: var(--color-background-near);
  border-radius: 8px 8px 0 0;
`;

const DialogContent = styled.div`
  padding: 0.5rem;
  width: 100%;
  height: 100%;
`;

const DialogClose = styled.div`
  position: relative;
  cursor: pointer;
`;

interface DialogProviderProps {
  children: ReactNode;
}

// Provider component
export function DialogProvider(props: DialogProviderProps) {
  const { children } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<ReactNode>(null);
  const [buttons, setButtons] = useState<ReactNode[]>([
    <Button key={`button-${uuidv4()}`} label='OK' onClick={() => {}} />,
  ]);

  const openDialog = (title: string, content: ReactNode, buttons: ReactNode[]) => {
    setTitle(title);
    setContent(content);
    setButtons(buttons);
    setIsOpen(true);
  };
  const closeDialog = () => setIsOpen(false);

  return (
    <DialogContext.Provider value={{ isOpen, openDialog, closeDialog }}>
      <DialogOverlay
        isOpen={isOpen}
        onClick={(e) => {
          closeDialog();
        }}
      >
        <DialogWindow onClick={(e) => e.stopPropagation()}>
          <DialogHeader>
            <TypeFace fontSize='large'>{title}</TypeFace>
            <DialogClose>
              <Button
                icon={faX}
                iconSize='large'
                onClick={() => {
                  closeDialog();
                }}
              />
            </DialogClose>
          </DialogHeader>
          <DialogContent>{content}</DialogContent>
          <div className='dialog-buttons'>
            <Box width='100%' justifyContent='flex-end' padding='small'>
              <Columns spacing='small'>{buttons}</Columns>
            </Box>
          </div>
        </DialogWindow>
      </DialogOverlay>
      {children}
    </DialogContext.Provider>
  );
}

// Custom hook for consuming the context
export const useDialog = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error('useDialog must be used within a DialogProvider');
  }
  return context;
};
