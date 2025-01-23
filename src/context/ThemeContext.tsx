import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { SpooderPet, ThemeColors, ThemeConstants, ThemeVariables } from "../Types";
import {
  rgbToHsl,
  hslToRgb,
  rgbToHex,
  fullLuminance,
  setLuminance,
} from "../util/ColorUtil";
import {Global, css} from '@emotion/react';
import { resetStyle, indexStyle, inputStyle, animations, styleVariables } from "./style/Style";

const applyThemeColors = (colors: ThemeColors) => {
  const {
    baseColor,
    backgroundColorFar,
    backgroundColorNear,
    buttonBackgroundColor,
    buttonBorderColor,
    buttonFontColor,
    colorAnalogousCW,
    colorAnalogousCCW,
    darkColorAnalogousCCW,
    darkColorAnalogousCW,
    buttonFontColorAnalogousCW,
    buttonFontColorAnalogousCCW,
    inputTextColor,
    inputBackgroundColor,
  } = colors;

  document.documentElement.style.setProperty("--color-primary", baseColor);
  document.documentElement.style.setProperty(
    "--color-background-far",
    backgroundColorFar
  );
  document.documentElement.style.setProperty(
    "--color-background-near",
    backgroundColorNear
  );
  document.documentElement.style.setProperty(
    "--button-background-color",
    buttonBackgroundColor
  );
  document.documentElement.style.setProperty(
    "--button-border-color",
    buttonBorderColor
  );
  document.documentElement.style.setProperty(
    "--button-font-color",
    buttonFontColor
  );
  document.documentElement.style.setProperty(
    "--button-font-color",
    buttonFontColor
  );

  document.documentElement.style.setProperty(
    "--color-dark-analogous-cw",
    darkColorAnalogousCW
  );
  document.documentElement.style.setProperty(
    "--color-dark-analogous-ccw",
    darkColorAnalogousCCW
  );
  document.documentElement.style.setProperty(
    "--color-analogous-cw",
    colorAnalogousCW
  );
  document.documentElement.style.setProperty(
    "--color-analogous-ccw",
    colorAnalogousCCW
  );
  document.documentElement.style.setProperty(
    "--button-font-color-analogous-cw",
    buttonFontColorAnalogousCW
  );
  document.documentElement.style.setProperty(
    "--button-font-color-analogous-ccw",
    buttonFontColorAnalogousCCW
  );

  document.documentElement.style.setProperty(
    "--input-text-color",
    inputTextColor
  );
  document.documentElement.style.setProperty(
    "--input-background-color",
    inputBackgroundColor
  );
};

const calculateThemeColors = (
  hue: number,
  saturation: number,
  isDarkTheme: boolean
) => {
  const rgbArray = hslToRgb(hue * 360, saturation * 100, 50);
  const color = rgbToHex(rgbArray[0], rgbArray[1], rgbArray[2]);
  // Convert the color to HSL array
  const hslColor = rgbToHsl(rgbArray[0], rgbArray[1], rgbArray[2]);

  // Calculate the clockwise analogous color
  const cwHslColor = hslColor.map((v, i) => (i === 0 ? (v + 30) % 360 : v));
  const cwRgbColor = hslToRgb(cwHslColor[0], cwHslColor[1], cwHslColor[2]);
  const cwAnalogousColor = rgbToHex(
    cwRgbColor[0],
    cwRgbColor[1],
    cwRgbColor[2]
  );

  // Calculate the counterclockwise analogous color
  const ccwHslColor = hslColor.map((v, i) => (i === 0 ? (v - 30) % 360 : v));
  const ccwRgbColor = hslToRgb(ccwHslColor[0], ccwHslColor[1], ccwHslColor[2]);
  const ccwAnalogousColor = rgbToHex(
    ccwRgbColor[0],
    ccwRgbColor[1],
    ccwRgbColor[2]
  );

  const baseColor = fullLuminance(color);
  const backgroundColorFar = setLuminance(baseColor, 0.05);
  const backgroundColorNear = setLuminance(baseColor, 0.1);
  const buttonBackgroundColor = setLuminance(baseColor, 0.2);
  const buttonBorderColor = baseColor;

  //console.log('DARK THEME', isDarkTheme, isDarkTheme ? '#fff' : '#000');

  return {
    baseColor: baseColor,
    backgroundColorFar,
    backgroundColorNear,
    buttonBackgroundColor,
    buttonBorderColor,
    buttonFontColor: isDarkTheme ? "#fff" : "#000",
    darkColorAnalogousCW: setLuminance(cwAnalogousColor, 0.2),
    darkColorAnalogousCCW: setLuminance(ccwAnalogousColor, 0.2),
    colorAnalogousCW: cwAnalogousColor,
    colorAnalogousCCW: ccwAnalogousColor,
    buttonFontColorAnalogousCW: isDarkTheme ? "#fff" : "#000",
    buttonFontColorAnalogousCCW: isDarkTheme ? "#fff" : "#000",
    inputTextColor: isDarkTheme ? "#fff" : "#000",
    inputBackgroundColor: isDarkTheme ? "#000" : "#fff",
  } as ThemeColors;
};

interface ThemeProviderProps {
  theme: ThemeVariables;
  spooder: SpooderPet;
  children: ReactNode;
}

interface ThemeContextProps {
  themeVariables: ThemeVariables;
  themeConstants:ThemeConstants;
  themeColors: ThemeColors;
  customSpooder: SpooderPet;
  isMobileDevice: boolean;
  setThemeHue: (hue: number) => void;
  setThemeSaturation: (saturation: number) => void;
  setThemeMode: (isDarkTheme: boolean) => void;
  refreshThemeColors: () => void;
  setCustomSpooder: (parts: any, colors: any) => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  themeVariables: {
    hue: 0,
    saturation: 0,
    isDarkTheme: false,
  },
  themeConstants:{
    settings: "#090",
    assets: "#008080",
    delete: "#8f2525",
  },
  themeColors:{
    baseColor: '#525252',
    backgroundColorFar:'',
    backgroundColorNear:'',
    buttonBackgroundColor:'',
    buttonBorderColor:'',
    buttonFontColor: '#fff',
    darkColorAnalogousCW: setLuminance('#525252', 0.2),
    darkColorAnalogousCCW: setLuminance('#525252', 0.2),
    colorAnalogousCW: '#525252',
    colorAnalogousCCW: '#525252',
    buttonFontColorAnalogousCW: '#fff',
    buttonFontColorAnalogousCCW: '#fff',
    inputTextColor: "#fff",
    inputBackgroundColor:"#000",
  },
  customSpooder:{
    parts: {
      bigeyeleft: 'o',
      bigeyeright: 'o',
      littleeyeleft: '\u00ba',
      littleeyeright: '\u00ba',
      fangleft: ' ',
      fangright: ' ',
      mouth: '\u03c9',
      bodyleft: '(',
      bodyright: ')',
      shortlegleft: '/\\',
      longlegleft: '/╲',
      shortlegright: '/\\',
      longlegright: '╱\\',
    },
    colors: {
      bigeyeleft: '#FFFFFF',
      bigeyeright: '#FFFFFF',
      littleeyeleft: '#FFFFFF',
      littleeyeright: '#FFFFFF',
      fangleft: '#FFFFFF',
      fangright: '#FFFFFF',
      mouth: '#FFFFFF',
      bodyleft: '#FFFFFF',
      bodyright: '#FFFFFF',
      shortlegleft: '#FFFFFF',
      shortlegright: '#FFFFFF',
      longlegleft: '#FFFFFF',
      longlegright: '#FFFFFF',
    },
  },
  isMobileDevice: false,
  setThemeHue: () => {},
  setThemeSaturation: () => {},
  setThemeMode: () => {},
  refreshThemeColors: () => {},
  setCustomSpooder: () => {},
});

export function ThemeProvider({ theme, spooder, children }: ThemeProviderProps) {
  const [themeVariables, setThemeVariables] = useState(theme);
  const [spooderPet, setSpooderPet] = useState<SpooderPet>(spooder);
  const [themeColors, setThemeColors] = useState<ThemeColors>({
    baseColor: '#525252',
    backgroundColorFar:'',
    backgroundColorNear:'',
    buttonBackgroundColor:'',
    buttonBorderColor:'',
    buttonFontColor: '#fff',
    darkColorAnalogousCW: setLuminance('#525252', 0.2),
    darkColorAnalogousCCW: setLuminance('#525252', 0.2),
    colorAnalogousCW: '#525252',
    colorAnalogousCCW: '#525252',
    buttonFontColorAnalogousCW: '#fff',
    buttonFontColorAnalogousCCW: '#fff',
    inputTextColor: "#fff",
    inputBackgroundColor:"#000",
  });
  const isMobileDevice = /Mobi|Android/i.test(window.navigator.userAgent) || window.innerWidth <= 900;

  const handleResize = useCallback(() => {
    setThemeHue(themeVariables.hue);
    setThemeSaturation(themeVariables.saturation);
    setThemeMode(themeVariables.isDarkTheme);

    window.addEventListener("resize", handleResize);
  }, [themeVariables.hue, themeVariables.isDarkTheme, themeVariables.saturation]);

  useEffect(() => {
    setThemeHue(theme.hue);
    setThemeSaturation(theme.saturation);
    setThemeMode(theme.isDarkTheme);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [theme.hue, theme.saturation, theme.isDarkTheme, handleResize]);

  const themeConstants = {
    settings: "#090",
    assets: "#008080",
    delete: "#8f2525",
  };

  function setThemeHue(hue: number) {
    setThemeVariables((prev) => ({ ...prev, hue }));
  }

  function setThemeSaturation(saturation: number) {
    setThemeVariables((prev) => ({ ...prev, saturation }));
  }

  function setThemeMode(isDarkTheme: boolean) {
    setThemeVariables((prev) => ({ ...prev, isDarkTheme }));
  }

  function refreshThemeColors() {
    const newColors = calculateThemeColors(
      themeVariables.hue,
      themeVariables.saturation,
      themeVariables.isDarkTheme
    );
    setThemeColors(newColors);
    applyThemeColors(newColors);
  }

  function setCustomSpooder(parts: any, colors: any) {
    setSpooderPet((prev) => ({
      ...prev,
      parts: { ...prev.parts, ...parts },
      colors: { ...prev.colors, ...colors },
    }));
  }

  

  return (
    <ThemeContext.Provider
      value={{
        themeVariables,
        themeConstants,
        themeColors,
        customSpooder: spooderPet,
        isMobileDevice,
        setThemeHue,
        setThemeSaturation,
        setThemeMode,
        refreshThemeColors,
        setCustomSpooder,
      }}
    >
      <Global styles={[styleVariables, resetStyle, indexStyle, inputStyle, animations]} />
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
