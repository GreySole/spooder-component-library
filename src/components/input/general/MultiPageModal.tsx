import React, { ReactNode, useState } from 'react';
import Box from '../../layout/Box';
import Button from '../controlled/Button';
import { faX } from '@fortawesome/free-solid-svg-icons';
import TypeFace from '../../layout/TypeFace';
import Pagination from './Pagination';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Columns from '../../layout/Columns';

interface ModalPage {
  title: string;
  content: ReactNode;
}

interface MultiPageModalProps {
  title: string;
  pages: ModalPage[];
  headerContent?: ReactNode;
  footerContent?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export default function MultiPageModal({
  title,
  pages,
  isOpen,
  onClose,
  headerContent,
  footerContent,
}: MultiPageModalProps) {
  const [currentPage, setCurrentPage] = useState(0);

  if (!isOpen) {
    return null;
  }

  const modalOverlayStyle = css`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-flow: column;
    background: var(--color-background-far);
    z-index: 9;
  `;

  const modalHeaderStyle = css`
    display: flex;
  `;

  const modalContentStyle = css`
    display: flex;
    flex-flow: column;
    overflow: auto;
    justify-content: space-between;
    flex-grow: 1;
    padding: 1rem;
    background: var(--color-background-near);
    border-radius: var(--interactive-radius);
    width: 100%;
    height: 100%;
  `;

  const modalCloseStyle = css`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1rem;
    cursor: pointer;
  `;

  const modalFooterStyle = css`
    bottom: 0;
    display: flex;
    justify-content: space-between;
  `;

  const _onClose = () => {
    setCurrentPage(0);
    onClose();
  };

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleCircleClick = (index: number) => {
    setCurrentPage(index);
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const ModalOverlay = styled.div`
    ${modalOverlayStyle}
  `;
  const ModalHeader = styled.div`
    ${modalHeaderStyle}
  `;
  const ModalContent = styled.div`
    ${modalContentStyle}
  `;
  const ModalFooter = styled.div`
    ${modalFooterStyle}
  `;
  const ModalClose = styled.div`
    ${modalCloseStyle}
  `;

  return (
    <ModalOverlay>
      <Box flexFlow='column' width='100%'>
        <ModalHeader>
          <Box
            className='modal-header'
            width='100%'
            justifyContent='space-between'
            alignItems='center'
            padding='small'
          >
            <TypeFace fontSize='xlarge' truncate>
              {title}
            </TypeFace>
            <Columns spacing='medium'>
              <Button icon={faX} iconSize='large' onClick={_onClose} className='delete-button' />
              {headerContent}
            </Columns>
          </Box>
        </ModalHeader>
      </Box>
      <ModalContent>
        <div className='modal-body'>{pages[currentPage].content}</div>
      </ModalContent>
      <ModalFooter>
        <Box
          className='modal-footer'
          width='100%'
          flexFlow='row'
          justifyContent='space-between'
          padding='medium'
        >
          <Pagination
            pageTitles={pages.map((page) => page.title)}
            currentPage={currentPage}
            handleCircleClick={handleCircleClick}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
          />
          {footerContent}
        </Box>
      </ModalFooter>
    </ModalOverlay>
  );
}
