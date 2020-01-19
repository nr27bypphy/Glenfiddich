import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import { AlertTd } from "../atoms/AlertTd";
import styled from "styled-components";

export const MemberTableTr = props => {
  const roles = new Map([
    ["owner", "オーナー"],
    ["admin", "管理者"],
    ["member", "メンバー"],
    ["guest", "ゲスト"]
  ]);

  return (
    <tr>
      <Td width="20%">
        {/* TODO: このIconのサイズがちょっとアンマッチ */}
        <PersonIcon />
      </Td>
      <Td width="25%">{props.workspaceMember.user.name}</Td>
      {/* role は integer が入っているので roleMap から対応する権限名を取り出す  */}
      <Td width="20%">{roles.get(props.workspaceMember.role)}</Td>
      <AlertTd />
    </tr>
  );
};

const Td = styled.td`
  width: ${props => props.width};
`;
