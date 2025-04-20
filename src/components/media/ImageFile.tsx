import React, { useState } from "react";

interface ImageProps {
  src: string;
  width?: string;
  height?: string;
  alt?: string;
  altSrc?: any;
  clip?: "circle" | "square";
  onError?: () => void;
}

export default function ImageFile({
  src,
  width,
  height,
  alt,
  altSrc,
  clip,
  onError,
}: ImageProps) {
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
    onError && onError();
  };

  let clipPath = undefined;
  if (clip === "circle") {
    clipPath = "circle(50% at 50% 50%)";
  } else if (clip === "square") {
    clipPath = "inset(0px round 10%)";
  }

  return (
    <img
      src={hasError ? altSrc : src}
      alt={alt}
      style={{ width: width, height: height, clipPath: clipPath }}
      onError={handleError}
    />
  );
}
