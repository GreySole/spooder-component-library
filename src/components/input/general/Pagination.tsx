import React, { useState } from "react";
import {
  faArrowLeft,
  faArrowRight,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { KeyedObject } from "../../../Types";
import Box from "../../layout/Box";
import TypeFace from "../../layout/TypeFace";
import Button from "../controlled/Button";

interface PaginationProps {
  pageTitles: string[];
  currentPage: number;
  setCurrentPage?: (page: number) => void;
  handleNext?: () => void;
  handlePrevious?: () => void;
}

export default function Pagination(props: PaginationProps) {
  const {
    pageTitles,
    currentPage,
    setCurrentPage,
    handleNext,
    handlePrevious,
  } = props;

  const [hoveredText, setHoveredText] = useState<KeyedObject>({
    label: "",
    position: -1,
  });

  const circleRadius = "0.75rem";

  const circleSpacing = (1 / pageTitles.length) * 100;
  const remHeight = 2;
  const svgHeight = `${remHeight + 1}rem`;

  const isAtEnd = currentPage === pageTitles.length - 1;
  const isAtStart = currentPage === 0;

  return (
    <Box width="inherit" justifyContent="space-between" alignItems="flex-end">
      {handlePrevious ? (
        <Button
          icon={isAtStart ? faMinus : faArrowLeft}
          iconSize="large"
          onClick={handlePrevious}
          disabled={isAtStart}
        />
      ) : null}
      <Box flexFlow="column" width="100%">
        <TypeFace fontSize="large" textAlign="center" fontWeight="bold">
          {pageTitles[currentPage]}
        </TypeFace>
        <Box width="100%">
          <svg width="100%" height={svgHeight}>
            {hoveredText.label ? (
              <text
                fontFamily="var(--font-family)"
                x={`${
                  circleSpacing / 2 + hoveredText.position * circleSpacing
                }%`}
                y="0.75rem"
                fill="var(--button-font-color)"
                textAnchor="middle"
              >
                {hoveredText.label}
              </text>
            ) : null}
            <line
              x1="0"
              y1={`${remHeight / 2 + 1}rem`}
              x2="100%"
              y2={`${remHeight / 2 + 1}rem`}
              stroke="var(--button-border-color)"
              strokeWidth={2}
            />
            {pageTitles.map((_, index) => (
              <>
                <circle
                  key={index}
                  cx={`${circleSpacing / 2 + index * circleSpacing}%`}
                  cy={`${remHeight / 2 + 1}rem`}
                  r={circleRadius}
                  fill={
                    index === currentPage || index === hoveredText.position
                      ? "var(--button-background-color)"
                      : "var(--color-background-far)"
                  }
                  stroke="var(--button-border-color)"
                  strokeWidth={index === currentPage ? 4 : 2}
                  onClick={() =>
                    setCurrentPage ? setCurrentPage(index) : null
                  }
                />
                <rect
                  x={`${circleSpacing / 4 + index * circleSpacing}%`}
                  y="0"
                  width={`${circleSpacing / 2}%`}
                  height={`${remHeight + 1}rem`}
                  fill="transparent"
                  onPointerOver={() => {
                    setHoveredText({
                      label: pageTitles[index],
                      position: index,
                    });
                  }}
                  onPointerOut={() => {
                    setHoveredText({
                      label: "",
                      position: -1,
                    });
                  }}
                  style={{ cursor: "pointer" }}
                />
              </>
            ))}
          </svg>
        </Box>
      </Box>
      {handleNext ? (
        <Button
          icon={isAtEnd ? faMinus : faArrowRight}
          iconSize="large"
          onClick={handleNext}
          disabled={isAtEnd}
        />
      ) : null}
    </Box>
  );
}
