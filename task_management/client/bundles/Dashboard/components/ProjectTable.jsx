import React from "react";
import styled from "styled-components";

export const ProjectTable = props => {
  return <Table>{props.children}</Table>;
};

const Table = styled.table`
  width: 100%;
`;
