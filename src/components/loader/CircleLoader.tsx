import React from "react";
import Box from "../layout/Box";
import { useTheme } from "../../context/ThemeContext";

export default function CircleLoader() {
  const { themeColors } = useTheme();
  return (
    <svg
      width="inherit"
      height="inherit"
      fill='var(--button-border-color)'
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      <g>
        <g>
          <path
            d="M63,32h-5.47c0-4.48-1.18-8.89-3.42-12.76c-2.24-3.88-5.47-7.11-9.34-9.34l2.74-4.74
		c4.71,2.72,8.63,6.64,11.35,11.35C61.56,21.21,63,26.57,63,32z"
          />
          <path
            d="M9.89,19.24L5.15,16.5c2.72-4.71,6.64-8.63,11.35-11.35S26.57,1,32,1v5.47c-4.48,0-8.89,1.18-12.76,3.42
		C15.36,12.13,12.13,15.36,9.89,19.24z"
          />
          <path
            d="M16.5,58.85c-4.71-2.72-8.63-6.64-11.35-11.35C2.44,42.79,1,37.43,1,32h5.47c0,4.48,1.18,8.89,3.42,12.76
		c2.24,3.88,5.47,7.11,9.34,9.34L16.5,58.85z"
          />
          <path
            d="M32,63v-5.47c4.48,0,8.89-1.18,12.76-3.42c3.88-2.24,7.11-5.47,9.34-9.34l4.74,2.74
		c-2.72,4.71-6.64,8.63-11.35,11.35C42.79,61.56,37.43,63,32,63z"
          />
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 32 32"
            to="360 32 32"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </g>
      </g>
    </svg>
  );
}
