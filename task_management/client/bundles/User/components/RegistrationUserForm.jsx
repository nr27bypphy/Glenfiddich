import React from "react";
import { FormHeader } from "../../Shared/components/forms/FormHeader";
import { FormElementWrapper } from "../../Shared/components/forms/FormElementWrapper";
import { LinkText } from "../../Shared/components/forms/LinkText";
import { SubmitButton } from "../../Shared/components/forms/SubmitButton";
import { SessionTextField } from "../../Session/components/SessionTextField";
import { FormBodyWrapper } from "../../Shared/components/forms/FormBodyWrapper";
import { FormCard } from "../../Shared/components/forms/FormCard";
import { Form } from "../../Shared/components/forms/Form";

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
          <div>
            <SubmitButton />
          </div>
          <LinkText href="/login">ログインはこちらから</LinkText>
        </FormBodyWrapper>
      </Form>
    </FormCard>
  );
};
