import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SessionTextField from "./SessionTextField";
import SubmitButton from "../../Shared/components/forms/SubmitButton";
import { LinkText } from "../../Shared/components/forms/LinkText";
import { FormHeader } from "../../Shared/components/forms/FormHeader";
import { FormElementWrapper } from "../../Shared/components/forms/FormElementWrapper";
import { FormBodyWrapper } from "../../Shared/components/forms/FormBodyWrapper";
import { FormCard } from "../../Shared/components/forms/FormCard";
import { Form } from "../../Shared/components/forms/Form";

const useStyles = makeStyles(theme => ({
  formContentWrapper: {
    width: "260px",
    margin: "0 auto"
  }
}));

export const LoginForm = props => {
  const classes = useStyles();

  return (
    <FormCard height="420px">
      <FormHeader>ログインフォーム</FormHeader>
      <Form action="/login" method="post">
        <FormBodyWrapper>
          <FormElementWrapper>
            <SessionTextField
              label="メールアドレス"
              name="session[mail]"
              hello="hoge"
            />
          </FormElementWrapper>
          <FormElementWrapper>
            <SessionTextField label="パスワード" name="session[password]" />
          </FormElementWrapper>
          <div>
            <SubmitButton />
          </div>
          <LinkText href="/users/new">新規登録はこちらから</LinkText>
        </FormBodyWrapper>
      </Form>
    </FormCard>
  );
};
