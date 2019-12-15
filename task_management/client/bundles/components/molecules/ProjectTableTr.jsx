import React from "react";
import { AlertTd } from "../atoms/AlertTd";

export const ProjectTableTr = props => {
  const task = props.task;

  return (
    <tr>
      <td>{task.title}</td>
      <td>{task.description}</td>
      <td></td>
      <AlertTd />
    </tr>
  );
};
