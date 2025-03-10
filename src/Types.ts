export interface FilterProps {
  label: string;
  icon: any;
  value: string;
}

export enum ToastType {
  SAVE = 'toast-save',
  ERROR = 'toast-error',
  REFRESH = 'toast-refresh',
  SUCCESS = 'toast-success',
}

export enum OSCConditionType {
  equal = '==',
  notEqual = '!=',
  greaterThanOrEqual = '>=',
  lessThanOrEqual = '<=',
  greaterThan = '>',
  lessThan = '<',
}

export enum OSCHandleType {
  trigger = 'trigger',
  toggle = 'toggle',
  search = 'search',
}

export interface PluginsObject {
  [key: string]: any;
}

export interface KeyedObject {
  [key: string]: any;
}

export interface PluginComponentProps {
  pluginName: string;
}

export interface EventCommandProps {
  eventName: string;
  commandIndex: number;
}

export interface EventTriggerProps {
  eventName: string;
}

export interface SelectOption {
  label: string;
  value: string | number;
}

export interface SpooderEvent {
  name: string;
  description: string;
  group: string;
  cooldown: number;
  chatnotification: boolean;
  cooldownnotification: boolean;
  triggers: { [key: string]: any };
  commands: any[];
}

export interface ChatTriggerObject {
  enabled: boolean;
  condition: ChatTriggerConditionObject;
  search: boolean;
  command: string;
}

export interface ChatTriggerConditionObject {
  broadcaster: boolean;
  mod: boolean;
  sub: boolean;
  vip: boolean;
}

export interface SpooderPet{
  parts: {
    bigeyeleft: string,
    bigeyeright: string,
    littleeyeleft: string,
    littleeyeright: string,
    fangleft: string,
    fangright: string,
    mouth: string,
    bodyleft: string,
    bodyright: string,
    shortlegleft: string,
    longlegleft: string,
    shortlegright: string,
    longlegright: string,
  },
  colors: {
    bigeyeleft: string,
    bigeyeright: string,
    littleeyeleft: string,
    littleeyeright: string,
    fangleft: string,
    fangright: string,
    mouth: string,
    bodyleft: string,
    bodyright: string,
    shortlegleft: string,
    shortlegright: string,
    longlegleft: string,
    longlegright: string,
  },
}

export interface ThemeColors {
  baseColor: string;
  backgroundColorFar: string;
  backgroundColorNear: string;
  buttonFontColor: string;
  buttonBackgroundColor: string;
  buttonBorderColor: string;
  colorAnalogousCW: string;
  colorAnalogousCCW: string;
  darkColorAnalogousCW: string;
  darkColorAnalogousCCW: string;
  buttonFontColorAnalogousCW: string;
  buttonFontColorAnalogousCCW: string;
  inputTextColor: string;
  inputBackgroundColor: string;
}

export interface ThemeVariables {
  hue: number;
  saturation: number;
  isDarkTheme: boolean;
}

export interface ThemeConstants{
  settings: string;
  assets: string;
  delete: string;
}

export enum StyleSize {
  none = '0rem',
  xsmall = '0.25rem',
  small = '0.5rem',
  medium = '1rem',
  large = '1.5rem',
  xlarge = '2rem',
}

export enum StyleSizeButton{
  none = '0rem',
  xsmall = '1rem',
  small = '3rem',
  medium = '5rem',
  large = '7rem',
  xlarge = '9rem',
}

export type StyleSizeType = 'none' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

export interface NewPlugin {
  [key: string]: {
    name: string;
    author: string;
    description: string;
    status: string;
    message: string;
  };
}
