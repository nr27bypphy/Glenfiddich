import React, { useState } from "react";
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
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  personIcon: {
    height: "40px",
    width: "5rem"
  }
});

const DESTROY_USER = gql`
  mutation($id: ID!, $currentUserId: Int!) {
    destroyUser(input: { id: $id, currentUserId: $currentUserId }) {
      users {
        id
        name
        email
        role
      }
    }
  }
`;

export const MemberList = props => {
  const classes = useStyles();
  const [users, setUsers] = useState(props.users);
  const currentUser = props.currentUser;
  const [destroyUser, { userData }] = useMutation(DESTROY_USER);

  const destroy = (id, currentUserId) => {
    destroyUser({
      variables: { id: id, currentUserId: currentUserId }
    }).then(result => {
      setUsers(result.data.destroyUser.users);
    });
  };

  const roles = new Map([
    ["owner", "オーナー"],
    ["admin", "管理者"],
    ["normal", "一般"],
    ["guest", "ゲスト"]
  ]);

  return (
    <Wrapper>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="center">名前</TableCell>
            <TableCell align="left">権限</TableCell>
            <TableCell align="right" />
            <TableCell align="right" />
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(user => (
            <TableRow key={user.id}>
              {/* @todo ここだけ px 指定にしている rem 指定に直す */}
              <TableCell component="th" scope="row" width="300px">
                <FlexDiv>
                  <AccountCircleIcon className={classes.personIcon} />
                  <NameEmail>
                    <BoldText>{user.name}</BoldText>
                    <div>{user.email}</div>
                  </NameEmail>
                </FlexDiv>
              </TableCell>
              <TableCell align="left">
                <BoldText>{roles.get(user.role)}</BoldText>
              </TableCell>
              <TableCell align="right">
                {currentUser.role == "owner" && (
                  <IconButton onClick={() => destroy(user.id, currentUser.id)}>
                    <DeleteIcon />
                  </IconButton>
                )}
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
