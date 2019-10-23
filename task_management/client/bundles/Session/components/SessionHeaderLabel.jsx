import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  sessionHeaderLabel: {
    height: "60px",
    color: "rgb(255, 255, 255)",
    fontSize: "14px",
    margin: "0",
    padding: "0",
    lineHeight: "100px"
  }
}));

export default function SessionHeaderLabebl(props) {
  const classes = useStyles();

  return <h2 className={classes.sessionHeaderLabel}>ログインフォーム</h2>;
}
