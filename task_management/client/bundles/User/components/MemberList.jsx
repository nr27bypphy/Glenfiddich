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
import { BoldText } from "../../Shared/components/BoldText";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  },
  name: {
    display: "flex"
  },
  personIcon: {
    height: "40px",
    width: "5rem"
  },
  nameEmail: {
    fontSize: "15px"
  },
  nameText: {
    fontWeight: "bold"
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
                <div className={classes.name}>
                  <AccountCircleIcon className={classes.personIcon} />
                  <div className={classes.nameEmail}>
                    <BoldText>{row.name}</BoldText>
                    <div>{row.email}</div>
                  </div>
                </div>
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