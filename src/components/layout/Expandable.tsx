import React, { ReactNode, useEffect, useState } from "react";
import Box from "./Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import Columns from "./Columns";
import TypeFace from "./TypeFace";
import { StyleSize, StyleSizeType } from "../../Types";
import Icon from "../media/Icon";
import Border from "./Border";

interface ExpandableProps {
  label: string;
  children: ReactNode;
  fontSize?: StyleSizeType;
  forceOpen?: boolean;
}

export default function Expandable(props: ExpandableProps) {
  const { label, fontSize, forceOpen, children } = props;
  const [open, setOpen] = useState<boolean>(forceOpen ? true : false);

  useEffect(() => {
    if (forceOpen) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [forceOpen]);

  return (
    <Border colorOnHover>
      <Box
        className={"expandable" + (open ? " open" : "")}
        flexFlow="column"
        padding="small"
      >
        <Columns
          spacing="medium"
          onClick={(e) => setOpen(!open)}
          marginLeft="medium"
        >
          <TypeFace fontSize={fontSize ?? "xlarge"} userSelect="none">
            {label}
          </TypeFace>
          <Icon icon={open ? faCaretUp : faCaretDown} iconSize="large" />
        </Columns>
        {open ? children : undefined}
      </Box>
    </Border>
  );
}
