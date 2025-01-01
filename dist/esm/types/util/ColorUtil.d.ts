export declare function luminance(r: number, g: number, b: number): number;
export declare function luma(color: string | []): number;
export declare function fullLuminance(color: string): string;
export declare function setLuminance(color: string, luminance: number): string;
export declare function contrastingColor(color: string): string;
export declare const rgbToHex: (r: number, g: number, b: number) => string;
export declare function hexToRGBArray(color: string): [number, number, number];
export declare const rgbToHsl: (r: number, g: number, b: number) => [number, number, number];
export declare const hslToRgb: (h: number, s: number, l: number) => [number, number, number];
