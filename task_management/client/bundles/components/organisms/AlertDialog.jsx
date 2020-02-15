import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export const AlertDialog = ({open, setOpen, confirm, workspaceMember}) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {workspaceMember && `${workspaceMember.user.name}を本当に削除してもいいですか？`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            一度削除したユーザーは戻すことが出来ません
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => confirm()} color="primary">
            削除する
          </Button>
          <Button onClick={() => setOpen(false)} color="primary" autoFocus>
            キャンセル
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
