import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { BoldText } from "../atoms/BoldText";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  personIcon: {
    height: "40px",
    width: "5rem"
  }
});

function createData(name, icon, email, accountType) {
  return { name, icon, email, accountType };
}

const rows = [
  createData("Frozen yoghurt", 159, "eto@gmail.com", "Owner"),
  createData("Ice cream sandwich", 237, "eto@gmail.com", "Owner"),
  createData("Eclair", 262, "eto@gmail.com", "Owner"),
  createData("Cupcake", 305, "eto@gmail.com", "Owner"),
  createData("Gingerbread", 356, "eto@gmail.com", "Owner")
];

export const MemberList = props => {
  const classes = useStyles();

  return (
    <Wrapper>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="left">Account type</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              {/* @todo ここだけ px 指定にしている rem 指定に直す */}
              <TableCell component="th" scope="row" width="300px">
                <FlexDiv>
                  <AccountCircleIcon className={classes.personIcon} />
                  <NameEmail>
                    <BoldText>{row.name}</BoldText>
                    <div>{row.email}</div>
                  </NameEmail>
                </FlexDiv>
              </TableCell>
              <TableCell align="left">
                <BoldText>{row.accountType}</BoldText>
              </TableCell>
              <TableCell align="right">
                <MoreHorizIcon />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-left: 5%;
  margin-right: 10%;
`;

const FlexDiv = styled.div`
  display: flex;
`;

const NameEmail = styled.div`
  fontsize: 15px;
`;
