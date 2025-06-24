import React, { useState, createContext, useContext } from 'react';
import { ReactNode } from 'react';
import MouseArea from '../components/input/controlled/MouseArea';
import Box from '../components/layout/Box';
import TypeFace from '../components/layout/TypeFace';

interface TooltipContextType {
  showTip: (text: string) => void;
  hideTip: () => void;
}

const TooltipContext = createContext<TooltipContextType | null>(null);

export function TooltipProvider(props: TooltipProps) {
  const { children } = props;
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });
  const [text, setText] = useState('');
  const [opacity, setOpacity] = useState(0);

  const showTip = (text: string) => {
    setText(text);
    setOpacity(1);
  };

  const hideTip = () => {
    setOpacity(0);

    setTimeout(() => {
      setText('');
    }, 200);
  };

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const tooltipWidth = 200; // Approximate width of the tooltip
  const tooltipHeight = 50; // Approximate height of the tooltip

  const flipX = mouseCoords.x > screenWidth - (tooltipWidth + 50);
  const flipY = mouseCoords.y < tooltipHeight * 2;

  const positionCalc = {
    top: flipY ? `calc(${mouseCoords.y}px) + 20px` : `unset`,
    left: flipX ? `unset` : `calc(${mouseCoords.x}px + var(--font-size))`,
    bottom: flipY ? `unset` : `calc(${screenHeight}px - ${mouseCoords.y}px)`,
    right: flipX ? `calc(${screenWidth}px - ${mouseCoords.x}px + var(--font-size))` : `unset`,
  };

  const onPointerMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMouseCoords({ x: e.clientX, y: e.clientY });
  };

  return (
    <TooltipContext.Provider value={{ showTip, hideTip }}>
      <MouseArea onPointerMove={onPointerMove}>
        {text ? (
          <div
            style={{
              position: 'absolute',
              top: positionCalc.top,
              left: positionCalc.left,
              bottom: positionCalc.bottom,
              right: positionCalc.right,
              maxWidth: '200px',
              width: 'auto',
              backgroundColor: 'color-mix(in srgb, var(--color-background-far) 75%, transparent)',
              outline: '1px solid var(--button-border-color)',
              borderRadius: 'var(--interactive-radius)',
              zIndex: 999999,
              transition: 'opacity 0.2s ease-in-out',
              pointerEvents: 'none',
              opacity,
            }}
          >
            <Box padding='small'>
              <TypeFace fontSize='medium'>{text}</TypeFace>
            </Box>
          </div>
        ) : null}
        {children}
      </MouseArea>
    </TooltipContext.Provider>
  );
}

export const useTooltip = () => {
  const context = useContext(TooltipContext);
  if (!context) {
    throw new Error('useTooltip must be used within a TooltipProvider');
  }
  return context;
};

interface TooltipProps {
  children: ReactNode;
}
