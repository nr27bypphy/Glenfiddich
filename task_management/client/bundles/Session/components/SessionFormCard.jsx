import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
    backgroundColor: "#e3eee8",
    height: "410px",
    width: "380px",
    margin: "0 auto"
  }
}));

export default function SessionFormCard(props) {
  const classes = useStyles();

  return <Card className={classes.card}>{props.children}</Card>;
}
