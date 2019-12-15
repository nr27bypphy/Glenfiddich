import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: "#e3eee8",
    width: "260px",
    margin: "0 auto",
    display: "block",
    textAlign: "center",
    boxSizing: "border-box",
    color: "rgb(255, 255, 255)",
    backgroundColor: "#2c9a7a"
  }
}));

export const SubmitButton = _ => {
  const classes = useStyles();

  return (
    <Button variant="contained" className={classes.button} type="submit">
      Submit
    </Button>
  );
};
