import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

export const AddUserModal = props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const classes = useStyles();

  const handleAddProject = () => {
    props.handleClose();
  };

  return (
    <Dialog
      open={props.open}
      onClose={() => props.handleClose()}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">メンバーの追加</DialogTitle>
      <DialogContent>
        <DialogContentText>メンバーの追加が可能です！</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="メンバー名"
          type="name"
          value={name}
          onChange={e => {
            setName(e.target.value);
          }}
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="mail"
          label="メールアドレス"
          type="text"
          value={email}
          onChange={e => {
            setEmail(e.target.value);
          }}
          fullWidth
        />
        <FormControl className={classes.formControl}>
          <InputLabel>権限</InputLabel>
          <Select
            value={role}
            onChange={e => {
              setRole(e.target.value);
            }}
          >
            <MenuItem value={0}>オーナー</MenuItem>
            <MenuItem value={1}>管理者</MenuItem>
            <MenuItem value={2}>一般</MenuItem>
            <MenuItem value={3}>ゲスト</MenuItem>
          </Select>
        </FormControl>
        <TextField
          autoFocus
          margin="dense"
          id="password"
          label="パスワード"
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="password-confirmation"
          label="パスワード確認"
          type="password"
          value={passwordConfirmation}
          onChange={e => {
            setPasswordConfirmation(e.target.value);
          }}
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