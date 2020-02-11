import React from "react";
import { DashboardContainer } from "../templates/DashboardContainer";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "../../../lib/ApolloClient/client";
import { Header } from "../../components/organisms/Header";
import { CREATE_PROJECT } from "../../tags/Project";
import { useMutation } from "@apollo/react-hooks";

const DashboardPage = props => {
  const [createProject] = useMutation(CREATE_PROJECT);
  const postProject = (title, description) => {
    createProject({
      variables: {
        title: title,
        description: description,
        workspaceMemberId: null
      }
    });
  };

  return (
    <>
      <Header user={props.user} />
      <DashboardContainer
        tasks={props.tasks}
        users={props.users}
        workspaceId={props.workspaceId}
        postProject={postProject}
      />
    </>
  );
};

export default props => (
  <ApolloProvider client={client}>
    <DashboardPage {...props} />
  </ApolloProvider>
);
