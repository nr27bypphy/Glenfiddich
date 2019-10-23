import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import LoginForm from "./LoginForm";

const useStyles = makeStyles(theme => ({
  loginContens: {
    height: "850px",
    padding: "20%"
  }
}));

function LoginContents(props) {
  const classes = useStyles();

  return (
    <div className={classes.loginContens}>
      <LoginForm />
    </div>
  );
}

export default _ => <LoginContents />;
