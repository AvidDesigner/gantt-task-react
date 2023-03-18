import React from "react";
import styles from "./bar.module.css";

type BarDateHandleProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  barCornerRadius: number;
  onMouseDown: (event: React.MouseEvent<SVGRectElement, MouseEvent>) => void;
  backgroundColor: string;
};
export const BarDateHandle: React.FC<BarDateHandleProps> = ({
  x,
  y,
  width,
  height,
  barCornerRadius,
  onMouseDown,
  backgroundColor,
}) => {
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      className={styles.barHandle}
      fill={backgroundColor}
      ry={barCornerRadius}
      rx={barCornerRadius}
      onMouseDown={onMouseDown}
    />
  );
};
