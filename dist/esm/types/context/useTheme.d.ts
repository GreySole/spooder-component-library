import React, { ReactNode } from "react";
import { SpooderPet, ThemeColors, ThemeConstants, ThemeVariables } from "../Types";
interface ThemeProviderProps {
    theme: ThemeVariables;
    spooder: SpooderPet;
    children: ReactNode;
}
interface ThemeContextProps {
    themeVariables: ThemeVariables;
    themeConstants: ThemeConstants;
    themeColors: ThemeColors;
    customSpooder: SpooderPet;
    isMobileDevice: boolean;
    setThemeHue: (hue: number) => void;
    setThemeSaturation: (saturation: number) => void;
    setThemeMode: (isDarkTheme: boolean) => void;
    refreshThemeColors: () => void;
    setCustomSpooder: (parts: any, colors: any) => void;
}
export declare function ThemeProvider({ theme, spooder, children }: ThemeProviderProps): React.JSX.Element;
export default function useTheme(): ThemeContextProps;
export {};
