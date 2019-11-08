import React from "react";
import { AlertTd } from "./AlertTd";

export const ProjectTableTr = props => {
  return (
    <tr>
      <td>CD</td>
      <td># 表彰制度の設定</td>
      <td>PM</td>
      <AlertTd />
    </tr>
  );
};
