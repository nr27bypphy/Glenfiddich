import React from "react";
import { DashboardContainer } from "../templates/DashboardContainer";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "../../../lib/ApolloClient/client";
import { Header } from "../../components/organisms/Header";
import { CREATE_PROJECT } from "../../tags/Project";
import { DASHBOARD_PAGE } from "../../tags/Dashboard";
import { INVITATION_WORKSPACE_MEMBER } from "../../tags/WorkspaceMember";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { LoadingPage } from "./LoadingPage"

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
  const [addWorkspaceMember] = useMutation(INVITATION_WORKSPACE_MEMBER);
  const invitationWorkspaceMember = (name, email, role, password, passwordConfirmation) => {
    addWorkspaceMember({
      variables: {
        name: name,
        email: email,
        role: role,
        password: password,
        passwordConfirmation: passwordConfirmation,
      }
    });
  }
  const { data, error, loading } = useQuery(DASHBOARD_PAGE);

  if (loading == true) {
    return <LoadingPage />;
  }

  return (
    <>
      <Header user={props.user} />
      <DashboardContainer
        postProject={postProject}
        workspaceMembers={data.workspaceMembers}
        projects={data.projects}
        invitationWorkspaceMember={invitationWorkspaceMember}
      />
    </>
  );
};

export default props => (
  <ApolloProvider client={client}>
    <DashboardPage {...props} />
  </ApolloProvider>
);
