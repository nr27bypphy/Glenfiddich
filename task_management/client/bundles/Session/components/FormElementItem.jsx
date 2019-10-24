import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  formElementItem: {
    width: "260px",
    marginTop: "30px",
    marginBottom: "30px",
    height: "80px",
    boxSizing: "border-box"
  }
}));

export default function FormElementItem(props) {
  const classes = useStyles();

  return <div className={classes.formElementItem}>{props.children}</div>;
}
