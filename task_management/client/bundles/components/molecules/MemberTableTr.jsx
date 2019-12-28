import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import { AlertTd } from "../atoms/AlertTd";
import styled from "styled-components";

export const MemberTableTr = props => {
  const user = props.user;
  return (
    <tr>
      <Td width="20%">
        {/* TODO: このIconのサイズがちょっとアンマッチ */}
        <PersonIcon />
      </Td>
      <Td width="25%">{user.name}</Td>
      <Td width="20%">{user.role}</Td>
      <AlertTd />
    </tr>
  );
};

const Td = styled.td`
  width: ${props => props.width};
`;
