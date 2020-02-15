import React, { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import moment from "moment";
import PerfectScrollbar from "react-perfect-scrollbar";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TablePagination
} from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { AlertDialog } from "./AlertDialog";

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1050
  },
  nameContainer: {
    display: "flex",
    alignItems: "center"
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: "flex-end"
  }
}));

const roles = new Map([
  ["owner", "オーナー"],
  ["admin", "管理者"],
  ["normal", "一般"],
  ["guest", "ゲスト"]
]);

export const WorkspaceMembersTable = ({
  members,
  currentMember,
  destroyConfirm
}) => {
  const classes = useStyles();

  // 選択中のメンバーを管理する
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  // ユーザー削除の確認モーダルの状態管理で使用する
  const [modalOpen, setModalOpen] = useState(false);
  const [destroyMember, setDestroyMember] = useState();
  // 確認モーダルを開く
  const handleDialogOpen = member => {
    setDestroyMember(member);
    setModalOpen(true);
  };

  // 一括選択 or 一括解除
  const handleSelectAll = event => {
    let selectedMembers;

    if (event.target.checked) {
      selectedMembers = members.map(member => member.id);
    } else {
      selectedMembers = [];
    }

    setSelectedMembers(selectedMembers);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedMembers.indexOf(id);
    let newSelectedMembers = [];

    if (selectedIndex === -1) {
      newSelectedMembers = newSelectedMembers.concat(selectedMembers, id);
    } else if (selectedIndex === 0) {
      newSelectedMembers = newSelectedMembers.concat(selectedMembers.slice(1));
    } else if (selectedIndex === newSelectedMembers.length - 1) {
      newSelectedMembers = newSelectedMembers.concat(
        selectedMembers.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedMembers = newSelectedMembers.concat(
        newSelectedMembers.slice(0, selectedIndex),
        newSelectedMembers.slice(selectedIndex + 1)
      );
    }

    setSelectedMembers(newSelectedMembers);
  };

  // 現状使っていない
  const handlePageChange = (event, page) => {
    setPage(page);
  };

  // 現状使っていない
  const handleRowsPerPageChange = event => {
    setRowsPerPage(event.target.value);
  };

  return (
    <Card className={clsx(classes.root)}>
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedMembers.length === members.length}
                      color="primary"
                      indeterminate={
                        selectedMembers.length > 0 &&
                        selectedMembers.length < members.length
                      }
                      onChange={handleSelectAll}
                    />
                  </TableCell>
                  <TableCell>名前</TableCell>
                  <TableCell>メールアドレス</TableCell>
                  <TableCell>権限</TableCell>
                  <TableCell>招待日</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {members.slice(0, rowsPerPage).map(member => (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={member.id}
                    selected={selectedMembers.indexOf(member.id) !== -1}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedMembers.indexOf(member.id) !== -1}
                        color="primary"
                        onChange={event => handleSelectOne(event, member.id)}
                        value="true"
                      />
                    </TableCell>
                    <TableCell>
                      <div className={classes.nameContainer}>
                        <Avatar
                          className={classes.avatar}
                          // src={member}
                        >
                          {/* {getInitials(user.name)} */}
                        </Avatar>
                        <Typography variant="body1">
                          {member.user.name}
                        </Typography>
                      </div>
                    </TableCell>
                    <TableCell>{member.user.email}</TableCell>
                    <TableCell>{roles.get(member.role)}</TableCell>
                    <TableCell>
                      {moment(member.createdAt).format("DD/MM/YYYY")}
                    </TableCell>
                    <TableCell>
                      {currentMember.role == "owner" && (
                        <IconButton
                        onClick={() => handleDialogOpen(member)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <CardActions className={classes.actions}>
        <TablePagination
          component="div"
          count={members.length}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </CardActions>
      <AlertDialog
        open={modalOpen}
        setModalOpen={arg => setModalOpen(arg)}
        workspaceMember={destroyMember}
        confirm={destroyConfirm}
      />
    </Card>
  );
};

WorkspaceMembersTable.propTypes = {
  className: PropTypes.string,
  members: PropTypes.array.isRequired
};
