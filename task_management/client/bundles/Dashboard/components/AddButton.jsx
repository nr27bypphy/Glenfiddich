import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  centered: {
    height: "1.5rem",
    lineHeight: "1.5rem"
  }
}));

export const AddButton = props => {
  const classes = useStyles();

  return (
    <Button
      color="primary"
      className={classes.button}
      onClick={() => {
        props.handleClick();
      }}
    >
      <AddIcon className={classes.centered} />
      <span className={classes.centered}>{props.message}</span>
    </Button>
  );
};
