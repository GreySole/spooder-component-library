import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  CSSProperties,
} from "react";

interface SliderProps {
  value: number;
  step?: number;
  orientation: "horizontal" | "vertical";
  gradient: string;
  onChange: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({
  value,
  step,
  orientation,
  gradient,
  onChange,
}) => {
  const [grabbed, setGrabbed] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const knobRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = useCallback(
    (event: PointerEvent) => {
      if (!sliderRef.current || !knobRef.current || !grabbed) return;
      event.preventDefault();

      const sliderRect = sliderRef.current.getBoundingClientRect();
      let newValue = 0;

      if (orientation === "horizontal") {
        const offsetX = event.clientX - sliderRect.left;
        newValue = Math.max(0, Math.min(1, offsetX / sliderRect.width));
      } else {
        const offsetY = event.clientY - sliderRect.top;
        newValue = Math.max(
          0,
          Math.min(1, (sliderRect.height - offsetY) / sliderRect.height)
        );
      }
      if (step) {
        newValue = Math.round(newValue / step) * step;
      }
      onChange(newValue);
    },
    [grabbed, orientation, onChange]
  );

  const handlePointerUp = useCallback((event: PointerEvent) => {
    event.preventDefault();
    handlePointerMove(event);
    setGrabbed(false);
    document.removeEventListener("pointerup", handlePointerUp);
  }, []);

  const handlePointerDown = useCallback(
    (event: any) => {
      event.preventDefault();
      document.addEventListener("pointerup", handlePointerUp);
      setGrabbed(true);
      handlePointerMove(event);
    },
    [handlePointerMove]
  );

  useEffect(() => {
    document.addEventListener("pointermove", handlePointerMove);

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
    };
  }, [handlePointerMove]);

  const getKnobColor = () => {
    const gradientColors = gradient.split(",").map((color) => color.trim());

    const interpolateColor = (
      color1: string,
      color2: string,
      factor: number
    ) => {
      if (!color1 || !color2) return "";
      const hex = (color: string) => {
        const match = color.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
        if (!match) {
          throw new Error(`Invalid color format: ${color}`);
        }
        return [
          parseInt(match[1], 16),
          parseInt(match[2], 16),
          parseInt(match[3], 16),
        ];
      };

      const [r1, g1, b1] = hex(color1);
      const [r2, g2, b2] = hex(color2);

      const r = Math.round(r1 + factor * (r2 - r1));
      const g = Math.round(g1 + factor * (g2 - g1));
      const b = Math.round(b1 + factor * (b2 - b1));

      return `rgb(${r}, ${g}, ${b})`;
    };

    const segment = 1 / (gradientColors.length - 1);
    const index = Math.floor(value / segment);
    const factor = (value - index * segment) / segment;

    return interpolateColor(
      gradientColors[index],
      gradientColors[index + 1],
      factor
    );
  };

  const sliderStyle =
    orientation === "horizontal"
      ? {
          background: `linear-gradient(to right, ${gradient})`,
          position: "relative" as CSSProperties["position"],
          borderRadius: "10px",
          outline: "solid var(--button-border-color) 2px",
          width: "100%",
          height: "20px",
          cursor: "pointer",
        }
      : {
          background: `linear-gradient(to bottom, ${gradient})`,
          position: "relative" as CSSProperties["position"],
          borderRadius: "10px",
          outline: "solid var(--button-border-color) 2px",
          width: "20px",
          height: "100%",
          cursor: "pointer",
        };

  const knobStyle = {
    position: "absolute" as CSSProperties["position"],
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    outline: "solid var(--button-font-color) 2px",
    transform:
      orientation === "horizontal"
        ? "translate(-50%, -25%)"
        : "translate(-25%, -50%)",
    [orientation === "horizontal" ? "left" : "top"]:
      orientation === "horizontal"
        ? `${value * 100}%`
        : `${(1.0 - value) * 100}%`,
  };

  return (
    <div
      ref={sliderRef}
      className={`slider ${orientation}`}
      onPointerDown={handlePointerDown}
      style={{ userSelect: "none", touchAction: "none", ...sliderStyle }}
    >
      <div
        ref={knobRef}
        className="knob"
        style={{
          backgroundColor: getKnobColor(),
          ...knobStyle,
        }}
      />
    </div>
  );
};

export default Slider;
