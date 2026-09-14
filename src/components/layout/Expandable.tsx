import React, { ReactNode, useEffect, useState } from "react";
import Box from "./Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import Columns from "./Columns";
import TypeFace from "./TypeFace";
import { ExpandableIcon, StyleSize, StyleSizeType } from "../../Types";
import Icon from "../media/Icon";
import Border from "./Border";
import { useTooltip } from "../../context/TooltipContext";

interface ExpandableProps {
  label: string;
  children: ReactNode;
  fontSize?: StyleSizeType;
  forceOpen?: boolean;
  // Shown between the label and the expand/collapse indicator - e.g. which trigger kinds an
  // event group holds, or that the group is disabled. Order is caller-controlled.
  icons?: ExpandableIcon[];
}

export default function Expandable(props: ExpandableProps) {
  const { label, fontSize, forceOpen, children, icons } = props;
  const [open, setOpen] = useState<boolean>(forceOpen ? true : false);
  const { showTip, hideTip } = useTooltip();

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
          <Icon icon={open ? faCaretUp : faCaretDown} iconSize="large" />
          <TypeFace fontSize={fontSize ?? "xlarge"} userSelect="none">
            {label}
          </TypeFace>
          {icons && icons.length > 0 ? (
            <Columns spacing="small">
              {icons.map((entry, index) => (
                <span
                  key={index}
                  onPointerEnter={() => entry.tooltipText && showTip(entry.tooltipText)}
                  onPointerLeave={() => entry.tooltipText && hideTip()}
                >
                  <Icon icon={entry.icon} iconSize="medium" iconColor={entry.iconColor} />
                </span>
              ))}
            </Columns>
          ) : null}
        </Columns>
        {open ? children : undefined}
      </Box>
    </Border>
  );
}
