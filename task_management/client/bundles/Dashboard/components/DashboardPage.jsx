import React, { Fragment } from "react";
import { DashboardHeader } from "./DashbboardHeader";
import DashboardContainer from "./DashboardContainer";

function DashboardPage() {
  return (
    <>
      <DashboardHeader />
      <DashboardContainer />
    </>
  );
}

export default _ => <DashboardPage />;
