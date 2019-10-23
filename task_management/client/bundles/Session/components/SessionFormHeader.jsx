import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SessionHeaderLabel from "./SessionHeaderLabel";

const useStyles = makeStyles(theme => ({
  sessionFormHeader: {
    backgroundColor: "#2c9a7a",
    textAlign: "center",
    height: "80px"
  }
}));

export default function SessionFormHeader(props) {
  const classes = useStyles();

  return (
    <div className={classes.sessionFormHeader}>
      <SessionHeaderLabel />
    </div>
  );
}
