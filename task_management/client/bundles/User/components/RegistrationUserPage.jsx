import React from "react";
import { PaddingTopWrapper } from "../../Shared/components/PaddingTopWrapper";
import { RegistrationUserForm } from "./RegistrationUserForm";

const RegistrationUserPage = _ => {
  return (
    <PaddingTopWrapper>
      <RegistrationUserForm />
    </PaddingTopWrapper>
  );
};

export default props => <RegistrationUserPage {...props} />;
