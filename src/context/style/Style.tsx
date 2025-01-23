import {css} from '@emotion/react';

export const styleVariables = css`
  --font-family: 'Arial; Helvetica; sans-serif';
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
	--color-add: #4141ac;
	--color-save: #268626;
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

	--input-text-color:#000;
	--input-background-color:#fff;
`;

export const resetStyle = css`
    * {
      &::before,
      &::after {
        box-sizing: border-box;
      }
      box-sizing: border-box;
      margin: 0;
    }
    body {
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
    }
    img,
    picture,
    video,
    canvas,
    svg {
      display: block;
      max-width: 100%;
    }
    input,
    button,
    textarea,
    select {
        appearance: none;
      font: inherit;
    }
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      overflow-wrap: break-word;
    }
    #root,
    #__next {
      isolation: isolate;
    }
  `;

  export const indexStyle = css`
  :root {
  --header-height: 70px;
  --navigation-tabs-height: 70px;
  --footer-height: 70px;
  --interactive-radius: 0.5rem;
  font-size: 16px;
}

* {
  &:hover {
    &::-webkit-scrollbar {
      display: block;
    }
  }
  border: 0;
  box-shadow: none;
}
::-webkit-scrollbar {
  display: block;
  width: 15px;
}
::-webkit-scrollbar-track {
  background-color: var(--btn-color);
  border: 5px solid transparent;
  background-clip: padding-box;
  border-radius: 20px;
}
::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.25);
  border: 5px solid transparent;
  background-clip: padding-box;
  border-radius: 20px;

  &:vertical {
    &:hover {
      background-color: var(--white);
    }
    &:active {
      background-color: var(--white);
    }
  }
}

body {
  font-family: var(--font-family);

  overflow-y: overlay;
  background-color: var(--color-background-near);

  color: var(--white);
}

#ModUIViewer {
  width: 100%;
  height: 95vh;
}

.box{
  border-radius:var(--interactive-radius)
}

.expandable-label{
  font-size:24px;
}

.expandable:not(.open):hover{
  background-color: var(--color-background-far);
}

.expandable.open{
  background-color: var(--color-background-far);
}

.expandable.event:not(.open):hover{
  background-color: var(--button-background-color);
  outline: 2px solid var(--button-border-color);
}

.expandable.event.open .expandable-header:hover{
  background-color: var(--button-background-color);
}

.expandable.event.open{
  background-color: var(--color-background-near);
  outline: 2px solid var(--button-border-color);
}

.border-component{
  border-radius: var(--interactive-radius);
}

@media screen and (max-width: 600px) {
  .App-title {
    font-size: 24px;
  }
  .navigation-tabs {
    --navigation-tabs-height: 0px;
    display: none;
  }
}
  `;

  export const animations = css`
    @keyframes newglow {
    0% {
      background-color: transparent;
    }
    50% {
      background-color: var(--button-save-color);
    }
    0% {
      background-color: transparent;
    }
  }

  @keyframes deleted {
    0% {
      max-height: 500px;
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    }
    100% {
      max-height: 0;
      clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
    }
  }

  @keyframes hueSpin {
    0% {
      filter: hue-rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes spin{
      from{
          transform:rotate(0deg);
      }
      to{
          transform:rotate(360deg);
      }
  }

  @keyframes streamReconnecting{
      0% {background-color:var(--button-obs-color)}
      49% {background-color:var(--button-obs-color)}
      50% {background-color:var(--button-obs-streaming)}
      99% {background-color:var(--button-obs-streaming)}
  }

  @keyframes recordingPaused{
      0% {background-color:var(--button-obs-color)}
      49% {background-color:var(--button-obs-color)}
      50% {background-color:var(--button-obs-recording)}
      99% {background-color:var(--button-obs-recording)}
  }
  `;

  export const inputStyle = css`
    div:has(> input + button) {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  label:not(.field-section):has(> input, > textarea, > select, > button, > .boolswitch) {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    font-weight: bold;
  }

  input:not([type='checkbox']):not([type='radio']):not([type='range']),
  button,
  select {
    font-size: 20px;
    border: none;
    padding: 0.5rem;
    border-radius: var(--interactive-radius);

    color: var(--input-text-color);

    background-color: var(--input-background-color);
    outline-offset: 0px;

    box-shadow: 0 0 0 1px var(--gray-900);

    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s ease-in-out, outline-offset 0.2s ease-in-out, filter 0.2s, padding 0.2s ease-in-out, margin 0.2s ease-in-out;

    &:focus-visible {
      outline-offset: 4px;
    }

    &[type='color'] {
      appearance: none;
      display: block;
      padding: 0;

      cursor: pointer;

      aspect-ratio: 1;
      height: 36px;
      inline-size: unset;

      box-shadow: 0 0 0 3px white;

      &::-webkit-color-swatch-wrapper {
        aspect-ratio: 1;
        padding: 0;
      }

      &::-webkit-color-swatch {
        border: none;
        aspect-ratio: 1;
        border-radius: var(--interactive-radius);
      }

      &:hover {
        box-shadow: 0 0 0 5px white;
      }
    }
  }

  button {
    --button-color: var(--color-primary);

    color: var(--button-font-color);
    background-color: var(--button-background-color);
    outline: solid 2px var(--button-border-color);
    font-size: 20px;

    padding: 0.5rem 1rem;
    box-shadow: 0 0 0 1px var(--button-color);

    cursor: pointer;

    &:hover {
      filter: brightness(1.2);
    }

    &.add-button {
      color: var(--button-font-color-analogous-cw);
      background-color: var(--color-dark-analogous-cw);
      --button-color: var(--color-dark-analogous-cw);
    }

    &.save-button {
      color: var(--button-font-color-analogous-ccw);
      background-color: var(--color-dark-analogous-ccw);
      --button-color: var(--color-dark-analogous-ccw);
    }

    &.command-button {
      --button-color: var(--color-primary);
    }

    &.delete-button {
      color: var(--white) !important;
      background-color: var(--color-delete);
      --button-color: var(--color-delete) !important;
    }
  }

  select {
    appearance: none;
    background-repeat: no-repeat;
    background-position: right 0.5rem center;
    background-size: 1.5rem;
    padding-right:2rem;

    option {
      color: var(--input-text-color);
      background-color: var(--input-background-color);
    }
  }

  a {
    &:not(.link-override) {
      color: var(--text-link-color);
    }
  }

  .boolswitch {
    display: flex;
    position: relative;

    font-size: 20px;

    cursor: pointer;

    overflow: visible;

    input {
          --v-size: 1em;
          --size-ratio: 2;
          --h-size: calc(var(--size-ratio) * var(--v-size));
          --border-size: 2px;

          position: relative;
          display: block;
      height: var(--v-size);
      width: calc(2 * var(--v-size));

      background: var(--gray-900);

      border: var(--border-size) solid var(--gray-500);
      border-radius: calc(0.5 * var(--v-size));

          box-shadow: 0 0 0 0 var(--color-primary);

          cursor: pointer;

      outline-offset: 0px;

          transition: outline .2s ease, outline-offset .2s ease-in-out, box-shadow .1s ease-in-out;

          // Toggle switch on BG color
          &:before {
              content: '';
              display: block;
              position: absolute;

              left: 0;
              height: calc(var(--v-size) - 2 * var(--border-size));
              width: calc(var(--v-size) - 2 * var(--border-size));
              border-radius: calc(0.5 * var(--v-size));

              background-color: var(--color-primary);

              transition: width 0.1s ease-in-out, box-shadow 0.1s ease-in-out;
          }

          // Toggle switch nub
          &:after {
              content: '';
              display: block;
              position: absolute;

              margin: calc(-1 * var(--border-size));

              height: var(--v-size);
              width: var(--v-size);
              left: 0;
              border-radius: calc(0.5 * var(--v-size));
              background: var(--white);
              box-shadow: 0 0.1em calc(2px + 0.3em) rgba(0, 0, 0, 0.5), 0 0 0 2px var(--gray-100);

              transition: left 0.1s ease-in-out;

              // For testing
              // opacity: 0.25;
          }

          &:hover,
          &:focus {
              &:before {
                  width: calc(var(--v-size) - var(--border-size));
              }
              &:after {
                  left: var(--border-size);
              }
          }

          &:focus-visible {
              outline: var(--border-size) solid var(--color-primary);
              outline-offset: calc(2 * var(--border-size));
          }

          &:checked {
              box-shadow: 0 0 6px 0 var(--color-primary);

              &:before {
                  width: calc(var(--h-size) - 2 * var(--border-size));
              }

              &:after {
                  left: var(--v-size);
              }

              &:hover,
              &:focus {
                  &:before {
                      width: calc(var(--h-size) - 3 * var(--border-size));
                  }
                  &:after {
                      left: calc(var(--h-size) - var(--v-size) - var(--border-size));
                  }
              }
          }
    }

    div {
      display: none !important;
    }
  }
  `;