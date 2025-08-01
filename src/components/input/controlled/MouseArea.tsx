import React, { ReactNode } from 'react';

interface MouseAreaProps {
  children: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onDoubleClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onContextMenu?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onAuxClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onPointerEnter?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onPointerLeave?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onPointerMove?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onPointerOut?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onPointerOver?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onPointerUp?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onPointerDown?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onPointerCancel?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onPointerClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onPointerDoubleClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onPointerContextMenu?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onPointerAuxClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onGotPointerCapture?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onLostPointerCapture?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onDragStart?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragEnd?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDrag?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragEnter?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragLeave?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragOver?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDrop?: (e: React.DragEvent<HTMLDivElement>) => void;
  cursor?: React.CSSProperties['cursor'];
}

export default function MouseArea(props: MouseAreaProps) {
  const {
    children,
    onClick,
    onDoubleClick,
    onContextMenu,
    onAuxClick,
    onPointerEnter,
    onPointerLeave,
    onPointerMove,
    onPointerOut,
    onPointerOver,
    onPointerUp,
    onPointerDown,
    onPointerCancel,
    onGotPointerCapture,
    onLostPointerCapture,
    onDragStart,
    onDragEnd,
    onDrag,
    onDragEnter,
    onDragLeave,
    onDragOver,
    onDrop,
    cursor = 'default',
  } = props;

  return (
    <div
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      onContextMenu={onContextMenu}
      onAuxClick={onAuxClick}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onPointerMove={onPointerMove}
      onPointerOut={onPointerOut}
      onPointerOver={onPointerOver}
      onPointerUp={onPointerUp}
      onPointerDown={onPointerDown}
      onPointerCancel={onPointerCancel}
      onGotPointerCapture={onGotPointerCapture}
      onLostPointerCapture={onLostPointerCapture}
      onDragEnd={onDragEnd}
      onDragStart={onDragStart}
      onDrag={onDrag}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}
      style={{ width: 'inherit', height: 'inherit', cursor: cursor }}
    >
      {children}
    </div>
  );
}
