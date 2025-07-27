import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { SpooderPetPair, ThemeColors, ThemeConstants, ThemeVariables } from '../Types';
import {
  rgbToHsl,
  hslToRgb,
  rgbToHex,
  fullLuminance,
  setLuminance,
  calculateContrastRatio,
  hexToHsl,
} from '../util/ColorUtil';
import { Global, css } from '@emotion/react';
import { animations } from './style/Animations';
import { indexStyle } from './style/IndexStyle';
import { inputStyle } from './style/InputStyle';
import { resetStyle } from './style/ResetStyle';
import { styleVariables } from './style/StyleVariables';

const applyThemeColors = (colors: ThemeColors, isMobileDevice: boolean) => {
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
    themeTextColor,
    inputTextColor,
    inputBackgroundColor,
  } = colors;

  document.documentElement.style.setProperty('--color-primary', baseColor);
  document.documentElement.style.setProperty('--color-background-far', backgroundColorFar);
  document.documentElement.style.setProperty('--color-background-near', backgroundColorNear);
  document.documentElement.style.setProperty('--button-background-color', buttonBackgroundColor);
  document.documentElement.style.setProperty('--button-border-color', buttonBorderColor);
  document.documentElement.style.setProperty('--button-font-color', buttonFontColor);
  document.documentElement.style.setProperty('--button-font-color', buttonFontColor);

  document.documentElement.style.setProperty('--color-dark-analogous-cw', darkColorAnalogousCW);
  document.documentElement.style.setProperty('--color-dark-analogous-ccw', darkColorAnalogousCCW);
  document.documentElement.style.setProperty('--color-analogous-cw', colorAnalogousCW);
  document.documentElement.style.setProperty('--color-analogous-ccw', colorAnalogousCCW);
  document.documentElement.style.setProperty(
    '--button-font-color-analogous-cw',
    buttonFontColorAnalogousCW,
  );
  document.documentElement.style.setProperty(
    '--button-font-color-analogous-ccw',
    buttonFontColorAnalogousCCW,
  );

  document.documentElement.style.setProperty('--theme-text-color', themeTextColor);
  document.documentElement.style.setProperty('--input-text-color', inputTextColor);
  document.documentElement.style.setProperty('--input-background-color', inputBackgroundColor);

  const isItTooCloseToRed = () => {
    let [baseColorHue, baseColorSat, baseColorLight] = hexToHsl(baseColor);

    let hueClose = baseColorHue < 20 || baseColorHue > 330;
    let satClose = baseColorSat > 40;

    if (hueClose && satClose) {
      return true;
    }
  };

  if (isItTooCloseToRed()) {
    document.documentElement.style.setProperty('--color-delete', '#93299c');
    document.documentElement.style.setProperty('--color-delete-border', '#ea00ff');
  } else {
    document.documentElement.style.setProperty('--color-delete', '#8f2525');
    document.documentElement.style.setProperty('--color-delete-border', '#df1414');
  }

  const isItTooCloseToWarn = () => {
    let [baseColorHue, baseColorSat, baseColorLight] = hexToHsl(baseColor);

    let hueClose = baseColorHue < 70 && baseColorHue > 20;
    let satClose = baseColorSat > 40;

    if (hueClose && satClose) {
      return true;
    }
  };

  if (isItTooCloseToWarn()) {
    document.documentElement.style.setProperty('--color-warning', '#9c299c');
    document.documentElement.style.setProperty('--color-warning-border', '#e100ff');
  } else {
    document.documentElement.style.setProperty('--color-warning', '#b66700');
    document.documentElement.style.setProperty('--color-warning-border', '#ff9b19');
  }

  const isItTooCloseToSave = () => {
    let [baseColorHue, baseColorSat, baseColorLight] = hexToHsl(baseColor);

    let hueClose = baseColorHue < 150 && baseColorHue > 85;
    let satClose = baseColorSat > 40;

    if (hueClose && satClose) {
      return true;
    }
  };

  if (isItTooCloseToSave()) {
    document.documentElement.style.setProperty('--color-save', '#141d99');
    document.documentElement.style.setProperty('--color-save-border', '#0026ff');
  } else {
    document.documentElement.style.setProperty('--color-save', '#268626');
    document.documentElement.style.setProperty('--color-save-border', '#1cc51c');
  }

  if (isMobileDevice) {
    document.documentElement.style.setProperty('--font-size', '14px');
  } else {
    document.documentElement.style.setProperty('--font-size', '16px');
  }
};

const calculateThemeColors = (hue: number, saturation: number, isDarkTheme: boolean) => {
  const rgbArray = hslToRgb(hue * 360, saturation * 100, 50);
  const color = rgbToHex(rgbArray[0], rgbArray[1], rgbArray[2]);
  // Convert the color to HSL array
  const hslColor = rgbToHsl(rgbArray[0], rgbArray[1], rgbArray[2]);

  // Calculate the clockwise analogous color
  const cwHslColor = hslColor.map((v, i) => (i === 0 ? (v + 30) % 360 : v));
  const cwRgbColor = hslToRgb(cwHslColor[0], cwHslColor[1], cwHslColor[2]);
  const cwAnalogousColor = rgbToHex(cwRgbColor[0], cwRgbColor[1], cwRgbColor[2]);

  // Calculate the counterclockwise analogous color
  const ccwHslColor = hslColor.map((v, i) => (i === 0 ? (v - 30) % 360 : v));
  const ccwRgbColor = hslToRgb(ccwHslColor[0], ccwHslColor[1], ccwHslColor[2]);
  const ccwAnalogousColor = rgbToHex(ccwRgbColor[0], ccwRgbColor[1], ccwRgbColor[2]);

  const baseColor = fullLuminance(color);
  const backgroundColorFar = isDarkTheme
    ? setLuminance(baseColor, 0.05)
    : setLuminance(baseColor, 0.75);
  const backgroundColorNear = isDarkTheme
    ? setLuminance(baseColor, 0.1)
    : setLuminance(baseColor, 0.55);
  const buttonBackgroundColor = isDarkTheme
    ? setLuminance(baseColor, 0.2)
    : setLuminance(baseColor, 0.8);
  const buttonBorderColor = isDarkTheme
    ? setLuminance(baseColor, 0.5)
    : setLuminance(baseColor, 0.2);

  //console.log('DARK THEME', isDarkTheme, isDarkTheme ? '#fff' : '#000');

  return {
    baseColor: baseColor,
    backgroundColorFar,
    backgroundColorNear,
    buttonBackgroundColor,
    buttonBorderColor,
    buttonFontColor: isDarkTheme ? '#fff' : '#000',
    darkColorAnalogousCW: isDarkTheme
      ? setLuminance(cwAnalogousColor, 0.2)
      : setLuminance(cwAnalogousColor, 0.8),
    darkColorAnalogousCCW: isDarkTheme
      ? setLuminance(ccwAnalogousColor, 0.2)
      : setLuminance(ccwAnalogousColor, 0.8),
    colorAnalogousCW: cwAnalogousColor,
    colorAnalogousCCW: ccwAnalogousColor,
    buttonFontColorAnalogousCW: isDarkTheme ? '#fff' : '#000',
    buttonFontColorAnalogousCCW: isDarkTheme ? '#fff' : '#000',
    themeTextColor: isDarkTheme ? '#fff' : '#000',
    inputTextColor: isDarkTheme ? '#fff' : '#000',
    inputBackgroundColor: isDarkTheme ? '#000' : '#fff',
  } as ThemeColors;
};

interface ThemeProviderProps {
  theme: ThemeVariables;
  spooder: SpooderPetPair[];
  children: ReactNode;
}

interface ThemeContextProps {
  themeVariables: ThemeVariables;
  themeConstants: ThemeConstants;
  themeColors: ThemeColors;
  customSpooder: SpooderPetPair[];
  isMobileDevice: boolean;
  setThemeHue: (hue: number) => void;
  setThemeSaturation: (saturation: number) => void;
  setThemeMode: (isDarkTheme: boolean) => void;
  setThemeMonospacedFont: (isMonospacedFont: boolean) => void;
  setThemeFontWeight: (fontWeight: number) => void;
  setThemeLetterSpacing: (letterSpacing: number) => void;
  refreshThemeColors: () => void;
  setCustomSpooder: (parts: SpooderPetPair[]) => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  themeVariables: {
    hue: 0.5,
    saturation: 1,
    isDarkTheme: true,
    isMonospacedFont: false,
    fontWeight: 700,
    letterSpacing: 0,
  },
  themeConstants: {
    settings: '#090',
    assets: '#008080',
    delete: '#8f2525',
  },
  themeColors: {
    baseColor: '#525252',
    backgroundColorFar: '',
    backgroundColorNear: '',
    buttonBackgroundColor: '',
    buttonBorderColor: '',
    buttonFontColor: '#fff',
    darkColorAnalogousCW: setLuminance('#525252', 0.2),
    darkColorAnalogousCCW: setLuminance('#525252', 0.2),
    colorAnalogousCW: '#525252',
    colorAnalogousCCW: '#525252',
    buttonFontColorAnalogousCW: '#fff',
    buttonFontColorAnalogousCCW: '#fff',
    themeTextColor: '#fff',
    inputTextColor: '#fff',
    inputBackgroundColor: '#000',
  },
  customSpooder: [
    { partString: '/╲', partColor: '#FFFFFF' },
    { partString: '/\\', partColor: '#FFFFFF' },
    { partString: '(', partColor: '#FFFFFF' },
    { partString: 'º', partColor: '#FFFFFF' },
    { partString: 'o', partColor: '#FFFFFF' },
    { partString: ' ', partColor: '#FFFFFF' },
    { partString: 'ω', partColor: '#FFFFFF' },
    { partString: ' ', partColor: '#FFFFFF' },
    { partString: 'o', partColor: '#FFFFFF' },
    { partString: 'º', partColor: '#FFFFFF' },
    { partString: ')', partColor: '#FFFFFF' },
    { partString: '/\\', partColor: '#FFFFFF' },
    { partString: '╱\\', partColor: '#FFFFFF' },
  ],

  isMobileDevice: false,
  setThemeHue: () => {},
  setThemeSaturation: () => {},
  setThemeMode: () => {},
  setThemeMonospacedFont: () => {},
  setThemeFontWeight: () => {},
  setThemeLetterSpacing: () => {},
  refreshThemeColors: () => {},
  setCustomSpooder: () => {},
});

export function ThemeProvider({ theme, spooder, children }: ThemeProviderProps) {
  const initialTheme = useRef(theme);
  const initialSpooder = useRef(spooder);
  const [themeVariables, setThemeVariables] = useState(initialTheme.current);
  const [spooderPet, setSpooderPet] = useState<SpooderPetPair[]>(initialSpooder.current);
  const [isMobileDevice, setIsMobileDevice] = useState(
    /Mobi|Android/i.test(window.navigator.userAgent) || window.innerWidth <= 900,
  );
  const [themeColors, setThemeColors] = useState<ThemeColors>({
    baseColor: '#525252',
    backgroundColorFar: '',
    backgroundColorNear: '',
    buttonBackgroundColor: '',
    buttonBorderColor: '',
    buttonFontColor: '#fff',
    darkColorAnalogousCW: setLuminance('#525252', 0.2),
    darkColorAnalogousCCW: setLuminance('#525252', 0.2),
    colorAnalogousCW: '#525252',
    colorAnalogousCCW: '#525252',
    buttonFontColorAnalogousCW: '#fff',
    buttonFontColorAnalogousCCW: '#fff',
    themeTextColor: '#fff',
    inputTextColor: '#fff',
    inputBackgroundColor: '#000',
  });

  const handleResize = () => {
    setIsMobileDevice(/Mobi|Android/i.test(window.navigator.userAgent) || window.innerWidth <= 900);
    applyThemeColors(themeColors, isMobileDevice);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  useEffect(() => {
    initialTheme.current = {
      hue: theme.hue,
      saturation: theme.saturation,
      isDarkTheme: theme.isDarkTheme,
      isMonospacedFont: theme.isMonospacedFont,
      fontWeight: theme.fontWeight,
      letterSpacing: theme.letterSpacing,
    };
    setThemeVariables({
      hue: theme.hue,
      saturation: theme.saturation,
      isDarkTheme: theme.isDarkTheme,
      isMonospacedFont: theme.isMonospacedFont,
      fontWeight: theme.fontWeight,
      letterSpacing: theme.letterSpacing,
    });
    initialSpooder.current = spooder;
    setSpooderPet(spooder);
  }, [theme, spooder]);

  useEffect(() => {
    refreshThemeColors();
  }, [themeVariables]);

  const themeConstants = {
    settings: '#090',
    assets: '#008080',
    delete: '#8f2525',
    save: '#4caf50',
  };

  function setThemeHue(hue: number) {
    initialTheme.current.hue = hue;
    setThemeVariables((prev) => ({ ...prev, hue }));
  }

  function setThemeSaturation(saturation: number) {
    initialTheme.current.saturation = saturation;
    setThemeVariables((prev) => ({ ...prev, saturation }));
  }

  function setThemeMode(isDarkTheme: boolean) {
    initialTheme.current.isDarkTheme = isDarkTheme;
    setThemeVariables((prev) => ({ ...prev, isDarkTheme }));
  }

  function setThemeMonospacedFont(isMonospacedFont: boolean) {
    initialTheme.current.isMonospacedFont = isMonospacedFont;
    setThemeVariables((prev) => ({ ...prev, isMonospacedFont }));
  }

  function setThemeFontWeight(fontWeight: number) {
    initialTheme.current.fontWeight = fontWeight;
    setThemeVariables((prev) => ({ ...prev, fontWeight }));
  }

  function setThemeLetterSpacing(letterSpacing: number) {
    initialTheme.current.letterSpacing = letterSpacing;
    setThemeVariables((prev) => ({ ...prev, letterSpacing }));
  }

  function refreshThemeColors() {
    const newColors = calculateThemeColors(
      themeVariables.hue,
      themeVariables.saturation,
      themeVariables.isDarkTheme,
    );
    setThemeColors(newColors);
    applyThemeColors(newColors, isMobileDevice);
  }

  function setCustomSpooder(parts: SpooderPetPair[]) {
    initialSpooder.current = parts;
    setSpooderPet(parts);
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
        setThemeLetterSpacing,
        setThemeMonospacedFont,
        setThemeFontWeight,
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
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
