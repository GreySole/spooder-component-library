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
              top: `calc(${mouseCoords.y}px - var(--font-size) * 2.5)`,
              left: `calc(${mouseCoords.x}px + var(--font-size))`,
              backgroundColor: 'color-mix(in srgb, var(--color-background-far) 75%, transparent)',
              outline: '1px solid var(--button-border-color)',
              borderRadius: 'var(--interactive-radius)',
              zIndex: 999999,
              opacity,
              transition: 'opacity 0.2s ease-in-out',
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
