import React from "react";
import styled from "styled-components";

export const ProjectThead = props => {
  return (
    <thead>
      <tr>
        <TextLeftTh width="20%">タイトル</TextLeftTh>
        <TextLeftTh width="45%">詳細</TextLeftTh>
        <TextLeftTh width="10%">担当</TextLeftTh>
        <TextCenterTh width="25%">アラート</TextCenterTh>
      </tr>
    </thead>
  );
};

const TextLeftTh = styled.th`
  text-align: left;
  font-weight: bold;
  width: ${props => props.width};
`;

const TextCenterTh = styled.th`
  text-align: center;
  font-weight: bold;
  width: ${props => props.width};
`;
