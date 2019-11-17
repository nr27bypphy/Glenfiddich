import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SessionTextField from "./SessionTextField";
import FormElementItem from "./FormElementItem";
import SessionFormCard from "./SessionFormCard";
import SubmitButton from "./SubmitButton";
import styled from "styled-components";
import { FromHeader } from "../../Shared/components/FormHeader";

const useStyles = makeStyles(theme => ({
  formContentWrapper: {
    width: "260px",
    margin: "0 auto"
  }
}));

export const LoginForm = props => {
  const classes = useStyles();

  return (
    <SessionFormCard>
      <FromHeader>ログインフォーム</FromHeader>
      <form action="/login" method="post">
        <div className={classes.formContentWrapper}>
          <FormElementItem>
            <SessionTextField
              label="メールアドレス"
              name="session[mail]"
              hello="hoge"
            />
          </FormElementItem>
          <FormElementItem>
            <SessionTextField label="パスワード" name="session[password]" />
          </FormElementItem>
          <div>
            <SubmitButton />
          </div>
          <NewUserLink href="/users/new">新規登録はこちらから</NewUserLink>
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
};

const NewUserLink = styled.a`
  display: block;
  width: 50%;
  font-size: 0.5rem;
  margin: 0.5rem auto;
`;
