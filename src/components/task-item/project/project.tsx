import React from "react";
import { TaskItemProps } from "../task-item";
import styles from "./project.module.css";

export const Project: React.FC<TaskItemProps> = ({ task }) => {
  const barColor = task.styles.backgroundColor;
  const processColor = task.styles.progressColor;
  const projectWith = task.x2 - task.x1;

  // const projectLeftTriangle = [
  //   task.x1,
  //   task.y + task.height / 2 - 1,
  //   task.x1,
  //   task.y + task.height,
  //   task.x1 + 15,
  //   task.y + task.height / 2 - 1,
  // ].join(",");
  // const projectRightTriangle = [
  //   task.x2,
  //   task.y + task.height / 2 - 1,
  //   task.x2,
  //   task.y + task.height,
  //   task.x2 - 15,
  //   task.y + task.height / 2 - 1,
  // ].join(",");

  return (
    <g tabIndex={0} className={styles.projectWrapper}>
      <rect
        fill={barColor}
        x={task.x1}
        width={projectWith}
        y={task.y + 5}
        height={task.height * 0.5}
        ry={8}
        rx={8}
        className={styles.projectBackground}
      />
      <rect
        x={task.progressX}
        width={task.progressWidth}
        y={task.y + 5}
        height={task.height * 0.5}
        ry={8}
        rx={8}
        fill={processColor}
      />
      {/* <rect
        fill={barColor}
        x={task.x1}
        width={projectWith}
        y={task.y}
        height={task.height / 2}
        rx={task.barCornerRadius}
        ry={task.barCornerRadius}
        className={styles.projectTop}
      />
      <polygon
        className={styles.projectTop}
        points={projectLeftTriangle}
        fill={barColor}
      />
      <polygon
        className={styles.projectTop}
        points={projectRightTriangle}
        fill={barColor}
      /> */}
    </g>
  );
};
