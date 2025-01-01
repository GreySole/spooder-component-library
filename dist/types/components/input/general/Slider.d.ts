import React from 'react';
interface SliderProps {
    value: number;
    orientation: 'horizontal' | 'vertical';
    gradient: string;
    onChange: (value: number) => void;
}
declare const Slider: React.FC<SliderProps>;
export default Slider;
