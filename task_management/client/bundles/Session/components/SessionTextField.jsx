import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    lineHeight: "80px",
    width: "100%"
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
    />
  );
}
