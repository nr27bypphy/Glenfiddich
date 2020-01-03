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
import { AlertDialog } from "./ConfirmDialog";
import { DESTROY_USER } from "../../tags/User";
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

export const MemberList = props => {
  const classes = useStyles();
  const [users, setUsers] = useState(props.users);
  const currentUser = props.currentUser;

  // ユーザー削除の確認モーダルの状態管理で使用する
  const [destroyOpen, setDestroyOpen] = useState(false);
  const [destroyTargetUser, setDestroyTargetUser] = useState();
  // 確認モーダルを開く
  const handleDialogOpen = user => {
    setDestroyTargetUser(user);
    setDestroyOpen(true);
  };

  const roles = new Map([
    ["owner", "オーナー"],
    ["admin", "管理者"],
    ["normal", "一般"],
    ["guest", "ゲスト"]
  ]);

  // ユーザー削除用のmutation
  const [destroyUser, { userData }] = useMutation(DESTROY_USER);
  // ユーザーの削除を実行する
  const destroyConfirm = () => {
    // 削除対象が決まってない場合はこの後の処理で落ちないように早期returnする
    if (!destroyTargetUser) return;

    destroyUser({
      variables: {
        id: destroyTargetUser.id,
        currentUserId: currentUser.id
      }
    }).then(result => {
      setUsers(result.data.destroyUser.users);
      setDestroyOpen(false);
    });
  };

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
                  // <IconButton onClick={() => destroy(user.id, currentUser.id)}>
                  <IconButton onClick={() => handleDialogOpen(user)}>
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
      <AlertDialog
        open={destroyOpen}
        setOpen={arg => setDestroyOpen(arg)}
        setUsers={users => setUsers(users)}
        user={destroyTargetUser}
        confirm={() => destroyConfirm()}
      />
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
