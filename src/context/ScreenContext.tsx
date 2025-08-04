//! NOT READY FOR USE
//! This code is a work in progress and may not function as expected.


import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface ScreenProps {
    width: number;
    height: number;
    orientation: 'portrait' | 'landscape';
    devicePixelRatio: number;
    isMobile: boolean;
}

const getScreenProps = (): ScreenProps => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const orientation = width > height ? 'landscape' : 'portrait';
    const devicePixelRatio = window.devicePixelRatio || 1;
    const isMobile = width <= 768;
    return { width, height, orientation, devicePixelRatio, isMobile };
};

const ScreenContext = createContext<ScreenProps>(getScreenProps());

export const useScreen = () => useContext(ScreenContext);

export const ScreenProvider = ({ children }: { children: ReactNode }) => {
    const [screen, setScreen] = useState<ScreenProps>(getScreenProps());

    useEffect(() => {
        const handleResize = () => setScreen(getScreenProps());
        window.addEventListener('resize', handleResize);
        window.addEventListener('orientationchange', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('orientationchange', handleResize);
        };
    }, []);

    return (
        <ScreenContext.Provider value={screen}>
            {children}
        </ScreenContext.Provider>
    );
};