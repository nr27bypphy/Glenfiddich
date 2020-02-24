import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { WORKSPACE_MEMBERS_PROJECTS } from "../../tags/WorkspaceMember"
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "../../../lib/ApolloClient/client";
import { useQuery } from "@apollo/react-hooks";
import { LoadingPage } from "./LoadingPage";
import { WorkspaceMemberContainer } from "../templates/WorkspaceMemberContainer";

function WorkspaceMemberPage({workspaceMember}) {
  const { loading, error, data } = useQuery(WORKSPACE_MEMBERS_PROJECTS, {
    variables: { workspaceMemberId: workspaceMember.id },
  })
  // table に表示されている Project の index を管理する
  const [activeIndex, setAcitveIndex] = useState(0);

  if (loading == true) {
    return <LoadingPage />;
  }

  const changeActiveIndex = index => {
    setAcitveIndex(index);
  };

  return (
    <WorkspaceMemberContainer
      projects={data.projects}
      activeIndex={activeIndex}
      changeActiveIndex={changeActiveIndex}
    />
  );
}

export default props => (
  <ApolloProvider client={client}>
    <WorkspaceMemberPage {...props} />
  </ApolloProvider>
);
