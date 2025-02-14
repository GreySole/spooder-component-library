import React, { ReactNode, useState } from "react";
import Box from "../../layout/Box";
import Button from "../controlled/Button";
import { faX } from "@fortawesome/free-solid-svg-icons";
import TypeFace from "../../layout/TypeFace";
import Pagination from "./Pagination";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface ModalPage {
  title: string;
  content: ReactNode;
}

interface MultiPageModalProps {
  title: string;
  pages: ModalPage[];
  footerContent?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export default function MultiPageModal({
  title,
  pages,
  isOpen,
  onClose,
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
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-flow: column;
    height: calc(100dvh - var(--header-height));
    top: var(--header-height);
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
    border-radius: var(--interactive-radius);
    width: 100%;
    height: calc(100dvh - var(--header-height) - var(--footer-height));
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
      <Box flexFlow="column" width="100%">
        <ModalHeader>
          <Box
            classes={["modal-header"]}
            width="100%"
            justifyContent="space-between"
            alignItems="center"
            padding="small"
          >
            <TypeFace fontSize="xlarge">{title}</TypeFace>
            <ModalClose>
              <Button icon={faX} iconSize="large" onClick={_onClose} />
            </ModalClose>
          </Box>
        </ModalHeader>
      </Box>
      <ModalContent>
        <div className="modal-body">{pages[currentPage].content}</div>
      </ModalContent>
      <ModalFooter>
      <Box classes={["modal-footer"]} width="100%" flexFlow="column" padding="medium">
        <Pagination
          pageTitles={pages.map((page) => page.title)}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          endAction={() => {}}
        />
        {footerContent}
      </Box>
      </ModalFooter>
      
    </ModalOverlay>
  );
}
