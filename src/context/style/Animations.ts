import { css } from "@emotion/react";

export const animations = css`
    @keyframes newglow {
    0% {
      background-color: transparent;
    }
    50% {
      background-color: var(--color-save);
    }
    100% {
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
      0% {background-color:var(--color-obs)}
      49% {background-color:var(--color-obs)}
      50% {background-color:var(--color-obs-streaming)}
      99% {background-color:var(--color-obs-streaming)}
  }

  @keyframes recordingPaused{
      0% {background-color:var(--color-obs)}
      49% {background-color:var(--color-obs)}
      50% {background-color:var(--color-obs-recording)}
      99% {background-color:var(--color-obs-recording)}
  }
  `;