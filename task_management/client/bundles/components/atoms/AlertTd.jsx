import React from "react";
import styled from "styled-components";

export const AlertTd = props => {
  return (
    <Wrapper>
      <AlertBox alertColor="#FF3466">5</AlertBox>
      <AlertBox alertColor="#F3CA3E">5</AlertBox>
      <AlertBox alertColor="#2BCA40">5</AlertBox>
    </Wrapper>
  );
};

const Wrapper = styled.td`
  display: flex;
  justify-content: space-between;
`;

const AlertBox = styled.div`
  background-color: ${props => props.alertColor};
  text-align: center;
  flex-basis: 30%;
`;
