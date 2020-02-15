import React, { useState } from "react";
import { Header } from "../../components/organisms/Header";
import { MemberListHeader } from "../../components/molecules/MemberListHeader";
import { WorkspaceMembersTable } from "../../components/organisms/WorkspaceMembersTable";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "../../../lib/ApolloClient/client";
import { WORKSPACE_MEMBERS } from "../../tags/WorkspaceMember";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { LoadingPage } from "./LoadingPage";
import { makeStyles } from "@material-ui/core/styles";
import { DESTROY_WORKSPACE_MEMBER } from "../../tags/WorkspaceMember";

const useStyles = makeStyles(theme => ({
  table: {
    margin: "3% 5%"
  }
}));

const WorkspaceMembersPage = currentWorkspaceMember => {
  const { data, error, loading } = useQuery(WORKSPACE_MEMBERS);
  // ユーザー削除用のmutation
  const [destroyMember] = useMutation(DESTROY_WORKSPACE_MEMBER);
  // ユーザーの削除を実行する
  const destroyConfirm = workspaceMmeberId => {
    destroyMember({
      variables: { workspaceMemberId: workspaceMmeberId }
    }).then(result => {
      setDestroyOpen(false);
    });
  };

  const classes = useStyles();

  if (loading == true) {
    return <LoadingPage />;
  }

  return (
    <>
      <Header />
      <MemberListHeader />
      <div className={classes.table}>
        <WorkspaceMembersTable
          members={data.workspaceMembers}
          currentMember={currentWorkspaceMember.currentWorkspaceMember}
          destroyConfirm={destroyConfirm}
        />
      </div>
    </>
  );
};

export default props => (
  <ApolloProvider client={client}>
    <WorkspaceMembersPage {...props} />
  </ApolloProvider>
);
