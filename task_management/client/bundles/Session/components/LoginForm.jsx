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

function LoginForm(props) {
  const classes = useStyles();

  return (
    <SessionFormCard>
      <SessionFormHeader />
      <form action="/login" method="post">
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
        {/* CSRFトークン対策 */}
        <input
          type="hidden"
          name="authenticity_token"
          value={props.authenticity_token}
        />
      </form>
    </SessionFormCard>
  );
}

export default props => <LoginForm {...props} />;
