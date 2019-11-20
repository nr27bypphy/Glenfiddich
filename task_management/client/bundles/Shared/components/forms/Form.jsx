import React from "react";
import ReactOnRails from "react-on-rails";

export const Form = props => {
  const csrfToken = ReactOnRails.authenticityToken();

  return (
    <form
      action={props.action}
      method={props.method}
      className={props.className}
    >
      {props.children}
      {/* CSRFトークン対策 */}
      <input type="hidden" name="authenticity_token" value={csrfToken} />
    </form>
  );
};
