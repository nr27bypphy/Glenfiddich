import React from "react";

export const Form = props => {
  return (
    <form
      action={props.action}
      method={props.method}
      className={props.className}
    >
      {props.children}
    </form>
  );
};
