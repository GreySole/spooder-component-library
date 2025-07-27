import { css } from '@emotion/react';

export const inputStyle = css`
  div:has(> input + button) {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  label {
    color: var(--input-text-color);
    &[for^='rc-editable-input-'] {
      color: var(--input-text-color) !important;
    }
  }

  .sketch-picker {
    > div:first-child,
    > div:first-child div {
      cursor: crosshair !important;
    }
  }

  label:not(.field-section):has(> input, > textarea, > select, > button, > .boolswitch) {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: var(--input-text-color);
    font-weight: bold;

    &[data-unit] {
      position: relative;
      &:after {
        content: attr(data-unit);
        font-variation-settings: 'MONO' 1;
        display: inline-block;
        font-size: 1.25rem;
        color: var(--input-text-color);
        position: absolute;
        right: 0.5rem;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }

  textarea.w-tc-editor-text,
  .w-tc-editor-preview {
    font-variation-settings: 'MONO' 1 !important;
    letter-spacing: 0 !important;
  }

  input:not([type='checkbox']):not([type='radio']):not([type='range']),
  textarea,
  button,
  select {
    font-size: 1rem;
    border: none;
    padding: 0.5rem 1rem;
    border: 2px solid var(--gray-700);
    border-radius: var(--interactive-radius);

    color: var(--input-text-color);

    background-color: var(--input-background-color);
    outline-offset: 0px;

    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s ease-in-out,
      outline-offset 0.2s ease-in-out, filter 0.2s, padding 0.2s ease-in-out,
      margin 0.2s ease-in-out;

    &:focus-visible {
      outline-offset: 4px;
    }

    &[type='color'] {
      appearance: none;
      display: block;
      padding: 0;
      position: relative;

      cursor: pointer;

      aspect-ratio: 1;
      height: 46px;
      inline-size: unset;

      box-shadow: 0 0 0 2px var(--theme-text-color);

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
        box-shadow: 0 0 0 5px var(--theme-text-color);
      }
    }
  }

  button {
    --button-color: var(--color-primary);

    color: var(--button-font-color);
    background-color: var(--button-background-color);
    border-color: var(--button-border-color);
    font-size: 1rem;

    &.merge-with-input {
      border-radius: 0 var(--interactive-radius) var(--interactive-radius) 0;
      margin-left: -2px;
      z-index: 2;
    }

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
      > * {
        color: var(--white) !important;
      }

      color: var(--white) !important;
      background-color: var(--color-delete);
      --button-color: var(--color-delete) !important;
      --button-border-color: var(--color-delete-border) !important;
    }

    &.save-button {
      > * {
        color: var(--white) !important;
      }

      color: var(--white) !important;
      background-color: var(--color-save);
      --button-color: var(--color-save) !important;
      --button-border-color: var(--color-save-border) !important;
    }

    &.minimal {
      color: var(--button-font-color);
      background-color: transparent;
      box-shadow: none;
      outline: none;
      border: none;
      padding: 0.25rem 0.5rem;
      backdrop-filter: brightness(1);

      transition: outline-offset 0.2s ease-in-out, filter 0.2s, backdrop-filter 0.2s;

      --b: 1.7;

      &.selected {
        outline: solid 3px var(--button-color);
        outline-offset: -1px;
        backdrop-filter: brightness(var(--b));
      }

      &:hover {
        backdrop-filter: brightness(var(--b));
      }

      &:focus-visible {
        backdrop-filter: brightness(var(--b));
        outline: solid 2px var(--button-color);
        outline-offset: 2px;
      }
    }

    &[disabled] {
      color: var(--gray-400);
      background-color: var(--gray-600);
      cursor: not-allowed;
      border-color: var(--gray-400);

      &:hover {
        filter: none;
      }
    }
  }

  label:has(input[type='text']) {
    position: relative;
    > input {
      + button.text-input-clear-button {
        position: absolute;
        right: 0.25rem;
        top: 50%;
        transform: translateY(-50%);
        height: 80%;
        background: transparent;
        border: none;
        color: var(--input-text-color);
        cursor: pointer;
        pointer-events: none;
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 1;

        opacity: 0;
        transition: opacity 0.2s;

        &:hover {
          color: var(--color-primary);
        }
      }

      &:focus,
      &:focus-visible {
        + button.text-input-clear-button {
          pointer-events: auto;
          opacity: 1;
        }
      }
    }

    button.text-input-clear-button:focus {
      pointer-events: auto;
      opacity: 1;
    }
  }

  label:has(input[type='color']) {
    > .color-input-container {
      position: relative;
      height: auto;
      width: 46px;
      margin: 2px;

      input[type='color'] {
        border: none;
      }

      > .color-input-icon {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        left: 50%;
        top: 50%;

        transform: translate(-50%, -50%);

        pointer-events: none;
      }
      > .react-colorful {
        position: absolute;
        top: 100%;
        box-shadow: var(--default-box-shadow);
      }
    }
    &.smaller {
      > .color-input-container {
        width: 36px;
        > input[type='color'] {
          height: 36px;
          width: 36px;
        }
      }
    }
  }

  label:has(~ button.merge-with-input) {
    input:not([type='checkbox']):not([type='radio']):not([type='range']),
    textarea,
    button,
    select {
      border-radius: var(--interactive-radius) 0 0 var(--interactive-radius);
      z-index: 1;
    }
  }

  select {
    appearance: none;
    background-repeat: no-repeat;
    background-position: right 0.5rem center;
    background-size: 1.5rem;
    padding-right: 2rem;

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
    align-self: start;

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

      background: var(--gray-600);

      border: var(--border-size) solid var(--gray-500);
      border-radius: calc(0.5 * var(--v-size));

      box-shadow: 0 0 0 0 var(--color-primary);

      cursor: pointer;

      outline-offset: 0px;

      transition: outline 0.2s ease, outline-offset 0.2s ease-in-out, box-shadow 0.1s ease-in-out;

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

  .range-label.vertical {
    height: 100% !important;
  }
  .range-input.vertical {
    writing-mode: bt-lr; /* IE */
    -webkit-appearance: slider-vertical !important; /* Chromium */
    width: 16px;
    height: 100% !important;
    padding: 0 5px;
  }

  input[type='range'][orient='horizontal'] {
    width: 100% !important;
  }
  input[type='range'] {
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
  }
  input[type='range']:focus {
    outline: none;
  }
  input[type='range']::-webkit-slider-runnable-track {
    width: 17px;
    height: 15px;
    animation-duration: 0.2s;
    box-shadow: 1px 1px 1px #50555c;
    background: #50555c;
    border-radius: 14px;
    border: 0px solid #000000;
  }
  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none !important;
    appearance: none;
    box-shadow: 0px 0px 0px #000000;
    border: 0px solid #000000;
    height: 15px;
    width: 15px;
    border-radius: 12px;
    background: #529de1;
    cursor: pointer;
  }
  input[type='range']:focus::-webkit-slider-runnable-track {
    background: #50555c;
  }
  input[type='range']::-moz-range-track {
    width: 20px;
    height: 100%;
    animation-duration: 0.2s;
    box-shadow: 1px 1px 1px #50555c;
    background: #50555c;
    border-radius: 14px;
    border: 0px solid #000000;
  }
  input[type='range']::-moz-range-thumb {
    box-shadow: 0px 0px 0px #000000;
    border: 0px solid #000000;
    height: 20px;
    width: 20px;
    border-radius: 12px;
    background: #529de1;
    cursor: pointer;
  }
  input[type='range']::-ms-track {
    width: 100%;
    height: 100%;
    cursor: pointer;
    animation-duration: 0.2s;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  input[type='range']::-ms-fill-lower {
    background: #50555c;
    border: 0px solid #000000;
    border-radius: 28px;
    box-shadow: 1px 1px 1px #50555c;
  }
  input[type='range']::-ms-fill-upper {
    background: #50555c;
    border: 0px solid #000000;
    border-radius: 28px;
    box-shadow: 1px 1px 1px #50555c;
  }
  input[type='range']::-ms-thumb {
    margin-top: 1px;
    box-shadow: 0px 0px 0px #000000;
    border: 0px solid #000000;
    height: 20px;
    width: 20px;
    border-radius: 12px;
    background: #529de1;
    cursor: pointer;
  }
  input[type='range']:focus::-ms-fill-lower {
    background: #50555c;
  }
  input[type='range']:focus::-ms-fill-upper {
    background: #50555c;
  }

  .filter-button {
    position: relative;
    display: inline-block;

    .dropdown {
      position: absolute;
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 8px;
      background-color: var(--color-background-far);
      border-radius: var(--interactive-radius);
      box-shadow: var(--default-box-shadow);
      z-index: 9;
      margin-top: 5px;
      right: 0;
      width: 130px;

      &.above {
        bottom: 100%;
        margin-bottom: 5px;
      }

      &.below {
        top: 100%;
        margin-top: 5px;
      }

      .dropdown-item {
        display: flex;
        align-items: center;
        padding: 5px 10px;

        &:hover {
          background-color: var(--color-background-near);
        }

        input {
          margin-right: 10px;
        }
      }
    }
  }
`;
