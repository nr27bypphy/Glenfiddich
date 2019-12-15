import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export const AddProjectModal = props => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [userName, setUserName] = useState("");

  const handleAddProject = () => {
    props.addNewTasks(title, description);
    props.handleClose();
  };

  return (
    <Dialog
      open={props.open}
      onClose={() => props.handleClose()}
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
        <TextField
          autoFocus
          margin="dense"
          id="user_name"
          label="担当者名"
          value={userName}
          onChange={e => {
            setUserName(e.target.value);
          }}
          type="text"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            props.handleClose();
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
