import React from "react";
import { Header } from "../../components/organisms/Header";
import { MemberListHeader } from "../../components/molecules/MemberListHeader";
import { MemberList } from "../../components/organisms/MemberList";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "../../../lib/ApolloClient/client";
import { WORKSPACE_MEMBERS } from "../../tags/WorkspaceMember";
import { useQuery } from "@apollo/react-hooks";

const WorkspaceMembersPage = (currentUser) => {
  const { data, error, loading } = useQuery(WORKSPACE_MEMBERS);

  if (loading == true) {
    return <p>loading....</p>
  }

  return (
    <>
      <Header />
      <MemberListHeader />
      <MemberList currentUser={currentUser} workspaceMembers={data.workspaceMembers} />
    </>
  );
};

export default props => (
  <ApolloProvider client={client}>
    <WorkspaceMembersPage {...props} />
  </ApolloProvider>
);
