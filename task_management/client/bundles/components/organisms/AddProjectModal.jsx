import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles(theme => ({
  selectBox: {
    width: "100%"
  }
}));

const MenuProps = {
  PaperProps: {
    style: {
      width: 250,
    },
  },
};

export const AddProjectModal = ({open, handleClose, postProject, workspaceMembers}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [workspaceMemberId, setWorkspaceMemberId] = useState([]);
  const classes = useStyles();

  const handleAddProject = () => {
    postProject(title, description, workspaceMemberId[0]);
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={() => handleClose()}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">プロジェクト追加</DialogTitle>
      <DialogContent>
        <DialogContentText>
          ここからプロジェクトの追加が可能です！！
          <br />
          タイトルと詳細、担当者を入力しましょう✨
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="タイトル"
          type="text"
          value={title}
          onChange={e => {
            setTitle(e.target.value);
          }}
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="description"
          label="詳細"
          type="text"
          value={description}
          onChange={e => {
            setDescription(e.target.value);
          }}
          fullWidth
        />
        <FormControl className={classes.selectBox}>
          <InputLabel id="demo-simple-select-label">担当者名</InputLabel>
          <Select
            id="workspace-member-name"
            multiple
            margin="dense"
            value={workspaceMemberId}
            autoWidth={true}
            label="担当者名"
            className={classes.selectBox}
            onChange={event => setWorkspaceMemberId(event.target.value)}
            input={<Input />}
            MenuProps={MenuProps}
          >
            {workspaceMembers.map(workspaceMember => (
              <MenuItem key={workspaceMember.user.name} value={workspaceMember.id}>
                {workspaceMember.user.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            handleClose();
          }}
          color="primary"
        >
          キャンセル
        </Button>
        <Button type="submit" onClick={handleAddProject} color="primary">
          追加
        </Button>
      </DialogActions>
    </Dialog>
  );
};
