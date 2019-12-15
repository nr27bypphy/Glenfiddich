import React from "react";
import { FormHeader } from "../../components/atoms/forms/FormHeader";
import { FormElementWrapper } from "../../components/atoms/forms/FormElementWrapper";
import { LinkText } from "../../components/atoms/LinkText";
import { SubmitButton } from "../../components/molecules/SubmitButton";
import { SessionTextField } from "../../components/atoms/SessionTextField";
import { FormBodyWrapper } from "../../components/atoms/forms/FormBodyWrapper";
import { FormCard } from "../../components/atoms/forms/FormCard";
import { Form } from "../../components/atoms/forms/Form";

export const RegistrationUserForm = _ => {
  return (
    <FormCard height="550px">
      <FormHeader>新規ユーザー登録</FormHeader>
      <Form action="/users" method="post">
        <FormBodyWrapper>
          <FormElementWrapper>
            <SessionTextField
              label="メールアドレス"
              name="user[mail]"
              hello="hoge"
            />
          </FormElementWrapper>
          <FormElementWrapper>
            <SessionTextField label="パスワード" name="user[password]" />
          </FormElementWrapper>
          <FormElementWrapper>
            <SessionTextField
              label="パスワード(確認)"
              name="user[password_confirmation"
            />
          </FormElementWrapper>
          <SubmitButton />
          <LinkText href="/login">ログインはこちらから</LinkText>
        </FormBodyWrapper>
      </Form>
    </FormCard>
  );
};
