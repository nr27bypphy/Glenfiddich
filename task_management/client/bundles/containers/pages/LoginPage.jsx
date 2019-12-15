import React from "react";
import { LoginForm } from "../templates/LoginForm";

function LoginPage(props) {
  return <LoginForm />;
}

export default props => <LoginPage {...props} />;
