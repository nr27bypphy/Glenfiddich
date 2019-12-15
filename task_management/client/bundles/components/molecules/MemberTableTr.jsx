import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import { AlertTd } from "../atoms/AlertTd";
import styled from "styled-components";

export const MemberTableTr = props => {
  return (
    <tr>
      <Td width="20%">
        {/* TODO: このIconのサイズがちょっとアンマッチ */}
        <PersonIcon />
      </Td>
      <Td width="45%"></Td>
      <Td width="10%"></Td>
      <AlertTd />
    </tr>
  );
};

const Td = styled.td`
  width: ${props => props.width};
`;
