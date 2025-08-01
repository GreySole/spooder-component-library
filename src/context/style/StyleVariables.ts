import { css } from "@emotion/react";

export const styleVariables = css`

@import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&family=Recursive:slnt,wght,CASL,CRSV,MONO@-15..0,300..1000,0..1,0..1,0..1&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');

:root {
  	--font-family: 'Recursive', Helvetica, Arial, sans-serif;
	--color-primary: #006e6e;
	--color-background-far: #002733;
	--color-background-near: #00526b;
	--color-button-background: #006685;
	--color-button-border: #008080;
	--color-dark-analogous-cw: #00376e;
	--color-dark-analogous-ccw: #006e37;
	--color-analogous-cw: #00376E;
	--color-analogous-ccw: #006E37;
	--color-delete: #8f2525;
	--color-delete-border: #df1414;
    --color-warning: #b66700;
    --color-warning-border: #ff9b19;
	--color-add: #4141ac;
	--color-save: #268626;
	--color-save-border: #1cc51c;
	--color-plugin: #09c;
	--color-obs: #555;
	--color-obs-streaming: #09c;
	--color-obs-recording: #c92d2d;
	--color-obs-scene-active: #30307c;
	--color-obs-studiomode-active: #af7200;

	--white: #fff;
	--black: #000;
	--gray-100: #f7fafc;
	--gray-200: #edf2f7;
	--gray-300: #e2e8f0;
	--gray-400: #cbd5e0;
	--gray-500: #a0aec0;
	--gray-600: #718096;
	--gray-700: #4a5568;
	--gray-800: #2d3748;
	--gray-900: #1a202c;

	--text-link-color: #9cc;
	--text-placeholder-color: #aaa;

	--asset-entry-color: #002733;
	--asset-entry-hover-color: #00526b;
	--asset-entry-selected-color: #006685;
	--border-color: #808080;
	--border-settings-color: #090;
	--border-assets-color: #008080;
	--input-field-color: #111;

    --theme-text-color: #fff;

	--input-text-color:#000;
	--input-background-color:#fff;

    --default-box-shadow: 0 4px 12px -2px var(--black);
    --lighter-box-shadow: 0 4px 12px -6px var(--black);
}
`;