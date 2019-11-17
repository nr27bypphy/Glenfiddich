import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: "0 7.5% 5% 7.5%"
  }
}));

export const GrPaper = props => {
  const classes = useStyles();

  return <Paper className={classes.paper}>{props.children}</Paper>;
};
