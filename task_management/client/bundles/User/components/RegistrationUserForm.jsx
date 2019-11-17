import React from "react";
import styled from "styled-components";
import { FormHeader } from "../../Shared/components/forms/FormHeader";
import { FormElementWrapper } from "../../Shared/components/forms/FormElementWrapper";
import { LinkText } from "../../Shared/components/forms/LinkText";
import SubmitButton from "../../Shared/components/forms/SubmitButton";
import SessionTextField from "../../Session/components/SessionTextField";
import { FormBodyWrapper } from "../../Shared/components/forms/FormBodyWrapper";
import { FormCard } from "../../Shared/components/forms/FormCard";

const RegistrationUserForm = props => {
  return (
    <FormCard height="550px">
      <FormHeader>新規ユーザー登録</FormHeader>
      <form action="/users" method="post">
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
          <FormElementWrapper>
            <SessionTextField
              label="パスワード(確認)"
              name="session[password_confirmation"
            />
          </FormElementWrapper>
          <div>
            <SubmitButton />
          </div>
          <LinkText href="/login">ログインはこちらから</LinkText>
        </FormBodyWrapper>
        {/* CSRFトークン対策 */}
        <input
          type="hidden"
          name="authenticity_token"
          value={props.authenticity_token}
        />
      </form>
    </FormCard>
  );
};

export default props => <RegistrationUserForm {...props} />;
