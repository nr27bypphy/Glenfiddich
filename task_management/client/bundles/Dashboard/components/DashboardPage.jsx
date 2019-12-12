import React from "react";
import { DashboardContainer } from "./DashboardContainer";
import { Header } from "../../Shared/components/Header";
import { ApolloProviderWrapper } from "../../Shared/components/ApolloProviderWrapper";

const DashboardPage = props => {
  return (
    <ApolloProviderWrapper>
      <Header user={props.user} />
      <DashboardContainer tasks={props.tasks} users={props.users} />
    </ApolloProviderWrapper>
  );
};

export default props => <DashboardPage {...props} />;
