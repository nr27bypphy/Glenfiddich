import React from "react";
import ReactOnRails from "react-on-rails";

export const CsrfTokenField = _ => {
  const csrfToken = ReactOnRails.authenticityToken();

  // CSRFトークン対策
  return <input type="hidden" name="authenticity_token" value={csrfToken} />;
};
