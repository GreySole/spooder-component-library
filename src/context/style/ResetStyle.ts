import { css } from "@emotion/react";

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