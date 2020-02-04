import React from "react";
import { DashboardContainer } from "../templates/DashboardContainer";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "../../../lib/ApolloClient/client";
import { Header } from "../../components/organisms/Header";

const DashboardPage = props => {
  return (
    <ApolloProvider client={client}>
      <Header user={props.user} />
      <DashboardContainer
        tasks={props.tasks}
        users={props.users}
        workspaceId={props.workspaceId}
      />
    </ApolloProvider>
  );
};

export default props => <DashboardPage {...props} />;
