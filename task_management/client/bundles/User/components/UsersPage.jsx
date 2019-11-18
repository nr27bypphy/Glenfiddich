import React from "react";
import { Header } from "../../Shared/components/Header";
import { MemberListHeader } from "./MemberListHeader";
import { MemberList } from "./MemberList";
import styled from "styled-components";

const UsersPage = props => {
  return (
    <>
      <FixedContent>
        <Header />
        <MemberListHeader />
      </FixedContent>
      <ScrollMemberList />
    </>
  );
};
const FixedContent = styled.div``;
const ScrollMemberList = styled(MemberList)`
  margin-top: 13rem;
`;
export default props => <UsersPage {...props} />;
