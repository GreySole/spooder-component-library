import React, { useState, useRef, ReactNode } from 'react';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Properties } from 'csstype';
import Border from '../../layout/Border';
import Box from '../../layout/Box';
import TypeFace from '../../layout/TypeFace';
import MouseArea from '../controlled/MouseArea';
import { useTheme } from '../../../context/ThemeContext';
import Icon from '../../media/Icon';

interface FileDropZoneProps {
  width?: Properties['width'];
  height?: Properties['height'];
  backgroundColor?: Properties['backgroundColor'];
  acceptedFileTypes?: string[];
  handleFile: (file: FileList) => void;
  multiple?: boolean;
  children?: ReactNode;
}

export default function FileDropZone(props: FileDropZoneProps) {
  const {
    width,
    height,
    backgroundColor,
    acceptedFileTypes,
    multiple = false,
    handleFile,
    children,
  } = props;
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { isMobileDevice } = useTheme();
  const [fileDropMessage, setFileDropMessage] = useState(
    isMobileDevice ? 'Click to Browse' : 'Drop File Here',
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);

    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      handleFile(files);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      handleFile(files);
    }
  };

  return (
    <Border borderWidth='0.25rem' borderStyle={isHovered ? 'solid' : 'dashed'}>
      <MouseArea
        onPointerEnter={() => {
          if (!isDragging) {
            setFileDropMessage('Click to Browse');
          }
          setIsHovered(true);
        }}
        onPointerLeave={() => {
          setFileDropMessage(isMobileDevice ? 'Click to Browse' : 'Drop File Here');
          setIsHovered(false);
        }}
        onDragOver={(e) => handleDragOver(e)}
        onDragLeave={handleDragLeave}
        onDrop={(e) => handleDrop(e)}
        onClick={handleClick}
        cursor='pointer'
      >
        {children ? (
          <>
            {children}
            <input
              type='file'
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileChange}
              multiple={multiple}
              accept={acceptedFileTypes ? acceptedFileTypes.join(',') : undefined}
            />
          </>
        ) : (
          <Box
            flexFlow='column'
            width={width}
            height={height}
            justifyContent='center'
            alignItems='center'
            backgroundColor={backgroundColor}
          >
            <Icon icon={faFileArrowDown} iconSize='10%' />
            <TypeFace fontSize='large'>{fileDropMessage}</TypeFace>
            <input
              type='file'
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileChange}
              multiple={multiple}
              accept={acceptedFileTypes ? acceptedFileTypes.join(',') : undefined}
            />
          </Box>
        )}
      </MouseArea>
    </Border>
  );
}
