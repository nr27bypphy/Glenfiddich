import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  textField: {
    lineHeight: "80px",
    width: "100%",
    boxSizing: "border-box",
    padding: "0px"
  }
}));

export default function SessionTextField(props) {
  const classes = useStyles();

  return (
    <TextField
      label={props.label}
      className={classes.textField}
      name={props.name}
      defaultValue=""
      margin="normal"
      variant="outlined"
      inputRef={props.inputRef}
    />
  );
}
