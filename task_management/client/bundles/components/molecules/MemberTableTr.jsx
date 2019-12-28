import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import { AlertTd } from "../atoms/AlertTd";
import styled from "styled-components";

export const MemberTableTr = props => {
  const roleMap = new Map([
    [0, "オーナー"],
    [1, "管理者"],
    [2, "一般"],
    [3, "ゲスト"]
  ]);

  return (
    <tr>
      <Td width="20%">
        {/* TODO: このIconのサイズがちょっとアンマッチ */}
        <PersonIcon />
      </Td>
      <Td width="25%">{props.user.name}</Td>
      {/* role は integer が入っているので roleMap から対応する権限名を取り出す  */}
      <Td width="20%">{roleMap.get(props.user.role)}</Td>
      <AlertTd />
    </tr>
  );
};

const Td = styled.td`
  width: ${props => props.width};
`;
