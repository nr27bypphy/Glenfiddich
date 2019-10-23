import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SessionTextField from "./SessionTextField";
import FormElementItem from "./FormElementItem";
import SessionFormCard from "./SessionFormCard";
import SessionFormHeader from "./SessionFormHeader";
import SubmitButton from "./SubmitButton";

const useStyles = makeStyles(theme => ({
  formContentWrapper: {
    width: "260px",
    margin: "0 auto"
  }
}));

function LoginForm() {
  const classes = useStyles();

  return (
    <SessionFormCard>
      <SessionFormHeader />
      <div className={classes.formContentWrapper}>
        <FormElementItem>
          <SessionTextField label="メールアドレス" name="session[mail]" />
        </FormElementItem>
        <FormElementItem>
          <SessionTextField label="パスワード" name="session[password]" />
        </FormElementItem>
        <div>
          <SubmitButton />
        </div>
      </div>
    </SessionFormCard>
  );
}

export default _ => <LoginForm />;
