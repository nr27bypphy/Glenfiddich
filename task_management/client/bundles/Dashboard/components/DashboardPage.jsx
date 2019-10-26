import React, { Fragment } from "react";
import DashboardHeader from "./DashbboardHeader";

function DashboardPage() {
  return (
    <>
      <DashboardHeader />
      <div>hello this is dashbaord</div>
    </>
  );
}

export default _ => <DashboardPage />;
