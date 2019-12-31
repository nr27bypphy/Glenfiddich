import React from "react";
import { Header } from "../../components/organisms/Header";
import { MemberListHeader } from "../../components/molecules/MemberListHeader";
import { MemberList } from "../../components/organisms/MemberList";
import { ApolloProviderWrapper } from "../../components/providers/ApolloProviderWrapper";

const UsersPage = props => {
  return (
    <ApolloProviderWrapper>
      <Header />
      <MemberListHeader />
      <MemberList currentUser={props.currentUser} users={props.users} />
    </ApolloProviderWrapper>
  );
};

export default props => <UsersPage {...props} />;
