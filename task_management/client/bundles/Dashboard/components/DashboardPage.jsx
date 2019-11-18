import React from "react";
import { DashboardContainer } from "./DashboardContainer";
import { Header } from "../../Shared/components/Header";

const DashboardPage = props => {
  return (
    <>
      <Header user={props.user} />
      <DashboardContainer tasks={props.tasks} />
    </>
  );
};

export default props => <DashboardPage {...props} />;
