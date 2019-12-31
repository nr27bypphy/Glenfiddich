import React from "react";
import styled from "styled-components";

export const DashboardTable = props => {
  return <Table>{props.children}</Table>;
};

const Table = styled.table`
  width: 100%;
`;
