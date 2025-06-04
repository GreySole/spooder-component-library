import React from "react";
import LinkButton from "./LinkButton";
import Button from "../controlled/Button";
import Columns from "../../layout/Columns";
import TypeFace from "../../layout/TypeFace";
import { StyleSize, StyleSizeButton, StyleSizeType } from "../../../Types";

interface ButtonRowButton {
  icon: any;
  iconSize?: string;
  color?: string;
  isLink?: boolean;
  linkName?: string;
  link?: string;
  isActive?: boolean;
  onClick?: () => void;
}

interface ButtonRowProps {
  buttons: ButtonRowButton[];
  buttonSize: StyleSizeType;
  iconSize: StyleSizeType;
}

export default function ButtonRow(props: ButtonRowProps) {
  const { buttons, buttonSize, iconSize } = props;

  const realButtonSize =
    buttonSize in StyleSizeButton
      ? StyleSizeButton[buttonSize as keyof typeof StyleSizeButton]
      : "5rem";
  const realIconSize =
    iconSize in StyleSize
      ? StyleSize[iconSize as keyof typeof StyleSize]
      : "2rem";

  const buttonMap = buttons.map((button, index) => {
    let className = "plugin-button";
    if (index == 0) {
      className += " start";
    } else if (index == buttons.length - 1) {
      className += " end";
    }
    if (button.isLink) {
      return (
        <LinkButton
          key={index}
          width={realButtonSize}
          className={className}
          mode="download"
          name={button.linkName + ".zip"}
          iconOnly={true}
          iconSize={button.iconSize ? button.iconSize : realIconSize}
          link={button.link ?? ""}
        />
      );
    } else {
      return (
        <Button
          key={index}
          width={realButtonSize}
          className={className}
          icon={button.icon}
          iconSize={button.iconSize ? button.iconSize : realIconSize}
          color={button.color}
          colorOnHover={!button.isActive}
          onClick={button.onClick ?? (() => {})}
        />
      );
    }
  });

  return (
    <TypeFace fontSize="medium">
      <Columns spacing="none" padding="small">
        {buttonMap}
      </Columns>
    </TypeFace>
  );
}
