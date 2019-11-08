import React from "react";
import styled from "styled-components";

export const PaperBody = props => {
  return <Wrapper>{props.children}</Wrapper>;
};

const Wrapper = styled.div`
  width: 100%;
  padding-top: 2.5rem;
`;
