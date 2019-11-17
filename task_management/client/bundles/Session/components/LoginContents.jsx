import React from "react";
import { LoginForm } from "./LoginForm";
import { PaddingTopWrapper } from "../../Shared/components/PaddingTopWrapper";

function LoginContents(props) {
  return (
    <PaddingTopWrapper>
      <LoginForm authenticity_token={props.authenticity_token} />
    </PaddingTopWrapper>
  );
}

export default props => <LoginContents {...props} />;
