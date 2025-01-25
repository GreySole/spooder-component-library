import { css } from "@emotion/react";

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