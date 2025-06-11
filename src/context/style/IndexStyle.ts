import { css } from "@emotion/react";

export const indexStyle = css`
  :root {
  --header-height: 70px;
  --navigation-tabs-height: 70px;
  --footer-height: 70px;
  --interactive-radius: 0.5rem;
  --font-size: 16px;
  font-size: var(--font-size);
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
      background-color: var(--theme-text-color);
    }
    &:active {
      background-color: var(--theme-text-color);
    }
  }
}

body {
  font-family: var(--font-family);
  font-variation-settings:
    "slnt" 0,
    "CASL" 0,
    "CRSV" 0,
    "MONO" 0;
  letter-spacing: -0.07em;

  overflow-y: overlay;
  background-color: var(--color-background-near);

  color: var(--theme-text-color);
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