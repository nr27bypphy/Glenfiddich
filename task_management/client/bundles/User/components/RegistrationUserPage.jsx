import React from "react";
import styled from "styled-components";
import { PaddingTopWrapper } from "../../Shared/components/PaddingTopWrapper";
import RegistrationUserForm from "./RegistrationUserForm";

const RegistrationUserPage = props => {
  return (
    <PaddingTopWrapper>
      <RegistrationUserForm></RegistrationUserForm>
    </PaddingTopWrapper>
  );
};

export default props => <RegistrationUserPage {...props} />;
