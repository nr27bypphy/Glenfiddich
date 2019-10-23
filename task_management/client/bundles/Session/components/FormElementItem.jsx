import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  formElementItem: {
    width: "50%",
    marginBottom: "15px",
    height: "80px",
    boxSizing: "border-box",
    margin: "0 auto"
  }
}));

export default function FormElementItem(props) {
  const classes = useStyles();

  return <div className={classes.formElementItem}>{props.children}</div>;
}
