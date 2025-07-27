import React from 'react';
import LinkButton from './LinkButton';
import Button from '../controlled/Button';
import Columns from '../../layout/Columns';
import TypeFace from '../../layout/TypeFace';
import { StyleSize, StyleSizeButton, StyleSizeType } from '../../../Types';

interface ButtonRowButton {
  icon: any;
  className?: string;
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
      : '5rem';
  const realIconSize =
    iconSize in StyleSize ? StyleSize[iconSize as keyof typeof StyleSize] : '1rem';

  const buttonMap = buttons.map((button, index) => {
    let classNames = button.className ? `${button.className} plugin-button` : 'plugin-button';

    if (index == 0) {
      classNames += ' start';
    } else if (index == buttons.length - 1) {
      classNames += ' end';
    }

    if (button.isLink) {
      return (
        <LinkButton
          key={index}
          width={realButtonSize}
          className={classNames}
          mode='download'
          name={button.linkName + '.zip'}
          iconOnly={true}
          iconSize={button.iconSize ? button.iconSize : realIconSize}
          link={button.link ?? ''}
        />
      );
    } else {
      return (
        <Button
          key={index}
          width={realButtonSize}
          className={classNames}
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
    <TypeFace fontSize='medium'>
      <Columns spacing='none'>
        {buttonMap}
      </Columns>
    </TypeFace>
  );
}
