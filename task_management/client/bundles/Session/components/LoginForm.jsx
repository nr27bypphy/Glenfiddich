import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SessionTextField from "./SessionTextField";
import FormElementItem from "./FormElementItem";
import SessionFormCard from "./SessionFormCard";
import SessionFormHeader from "./SessionFormHeader";
import SubmitButton from "./SubmitButton";
import useForm from "react-hook-form";

const useStyles = makeStyles(theme => ({
  formContentWrapper: {
    width: "260px",
    margin: "0 auto"
  }
}));

function LoginForm(props) {
  const classes = useStyles();
  const { register, handleSubmit, watch, errors, setValue } = useForm();
  const onSubmit = data => {};

  return (
    <SessionFormCard>
      <SessionFormHeader />
      <form onSubmit={handleSubmit(onSubmit)} method="post">
        <div className={classes.formContentWrapper}>
          <FormElementItem>
            <SessionTextField
              label="メールアドレス"
              name="session_mail"
              hello="hoge"
              inputRef={register({ required: true, minLength: 10 })}
            />
            {errors.session_mail && <span>This field is required</span>}
          </FormElementItem>
          <FormElementItem>
            <SessionTextField label="パスワード" name="session[password]" />
            {/* {errors.session[password] && <spa>Thie field is required</spa>} */}
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
