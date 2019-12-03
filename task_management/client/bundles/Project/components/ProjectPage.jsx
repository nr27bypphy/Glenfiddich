import React from "react";
import { Header } from "../../Shared/components/Header";
import { ApolloProviderWrapper } from "../../Shared/components/ApolloProviderWrapper";

function ProjectPage(props) {
  return (
    <ApolloProviderWrapper>
      <Header user={props.user} />
    </ApolloProviderWrapper>
  );
}

export default props => <ProjectPage {...props} />;
