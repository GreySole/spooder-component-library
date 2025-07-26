import React, { ReactNode } from 'react';

type VisuallyHiddenProps = {
    children: ReactNode;
    as?: React.ElementType;
    className?: string;
};

const visuallyHiddenStyle: React.CSSProperties = {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    width: '1px',
    whiteSpace: 'nowrap',
};

export const VisuallyHidden: React.FC<VisuallyHiddenProps> = ({
    children,
    as: Component = 'span',
    className,
}) => (
    <Component style={visuallyHiddenStyle} className={className}>
        {children}
    </Component>
);

export default VisuallyHidden;