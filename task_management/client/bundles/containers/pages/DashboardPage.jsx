import React from "react";
import { DashboardContainer } from "../templates/DashboardContainer";
import { Header } from "../../components/organisms/Header";
import { ApolloProviderWrapper } from "../../components/providers/ApolloProviderWrapper";

const DashboardPage = props => {
  return (
    <ApolloProviderWrapper>
      <Header user={props.user} />
      <DashboardContainer
        tasks={props.tasks}
        users={props.users}
        workspaceMembers={props.workspaceMembers}
      />
    </ApolloProviderWrapper>
  );
};

export default props => <DashboardPage {...props} />;
