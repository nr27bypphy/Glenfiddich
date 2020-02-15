import React from "react";
import { DashboardContainer } from "../templates/DashboardContainer";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "../../../lib/ApolloClient/client";
import { Header } from "../../components/organisms/Header";
import { CREATE_PROJECT } from "../../tags/Project";
import { DASHBOARD_PAGE } from "../../tags/Dashboard";
import { useMutation, useQuery } from "@apollo/react-hooks";

const DashboardPage = props => {
  const [createProject] = useMutation(CREATE_PROJECT);
  const postProject = (title, description, workspaceMemberId) => {
    createProject({
      variables: {
        title: title,
        description: description,
        workspaceMemberId: Number(workspaceMemberId)
      }
    });
  };
  const { data, error, loading } = useQuery(DASHBOARD_PAGE);

  if (loading == true) {
    return <p>loading....</p>;
  }

  return (
    <>
      <Header user={props.user} />
      <DashboardContainer
        tasks={props.tasks}
        users={props.users}
        workspaceId={props.workspaceId}
        postProject={postProject}
        workspaceMembers={data.workspaceMembers}
        projects={data.projects}
      />
    </>
  );
};

export default props => (
  <ApolloProvider client={client}>
    <DashboardPage {...props} />
  </ApolloProvider>
);
