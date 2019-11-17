import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

export const FormCard = props => {
  const classes = useStyles(props);

  return <Card className={classes.card}>{props.children}</Card>;
};

const useStyles = makeStyles({
  // style rule
  card: props => ({
    backgroundColor: "#e3eee8",
    height: props.height,
    width: "380px",
    margin: "0 auto"
  })
});
