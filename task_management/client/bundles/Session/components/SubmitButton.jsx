import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: "#e3eee8",
    width: "280px"
  }
}));

export default function SubmitButton() {
  const classes = useStyles();

  return (
    <Button variant="contained" className={classes.button}>
      Submit
    </Button>
  );
}
