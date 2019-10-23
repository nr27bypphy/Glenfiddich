import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SessionTextField from "./SessionTextField";
import FormElementItem from "./FormElementItem";
import SessionFormCard from "./SessionFormCard";
import SessionFormHeader from "./SessionFormHeader";
import SubmitButton from "./SubmitButton";

const useStyles = makeStyles(theme => ({}));

function LoginForm() {
  const classes = useStyles();

  return (
    <SessionFormCard>
      <SessionFormHeader />
      <FormElementItem>
        <SessionTextField label="メールアドレスす" name="session[mail]" />
      </FormElementItem>
      <FormElementItem>
        <SessionTextField label="パスワード" name="session[password]" />
      </FormElementItem>
      <SubmitButton />
    </SessionFormCard>
  );
}

export default _ => <LoginForm />;
