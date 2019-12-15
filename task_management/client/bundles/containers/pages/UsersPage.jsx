import React from "react";
import { Header } from "../../components/organisms/Header";
import { MemberListHeader } from "../../components/molecules/MemberListHeader";
import { MemberList } from "../../components/organisms/MemberList";
import styled from "styled-components";

const UsersPage = props => {
  return (
    <>
      <Header />
      <MemberListHeader />
      <ScrollMemberList />
    </>
  );
};

const ScrollMemberList = styled(MemberList)`
  margin-top: 13rem;
`;

export default props => <UsersPage {...props} />;
