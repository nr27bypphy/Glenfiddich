import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}));

function SessionTextField() {
  const classes = useStyles();

  return (
    <TextField
      className={classes.textField}
      defaultValue=""
      margin="normal"
      variant="outlined"
    />
  );
}

export default _ => <SessionTextField />;
