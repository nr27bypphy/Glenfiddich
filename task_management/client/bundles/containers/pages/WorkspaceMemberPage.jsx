import React, { useState } from "react";
import { Header } from "../../components/organisms/Header";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import { TaskTable } from "../../components/organisms/TaskTable";
import { WORKSPACE_MEMBERS_PROJECTS } from "../../tags/WorkspaceMember"
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "../../../lib/ApolloClient/client";
import { useQuery } from "@apollo/react-hooks";
import { LoadingPage } from "./LoadingPage";
import { ProjectDrawer } from "../../components/organisms/ProjectDrawer";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  toolbar: theme.mixins.toolbar
}));

function WorkspaceMemberPage({workspaceMember}) {
  const classes = useStyles();
  const { loading, error, data } = useQuery(WORKSPACE_MEMBERS_PROJECTS, {
    variables: { workspaceMemberId: workspaceMember.id },
  })
  // table に表示されている Project の index を管理する
  const [activeIndex, setAcitveIndex] = useState(0);

  if (loading == true) {
    return <LoadingPage />;
  }

  const changeActiveIndex = index => {
    setAcitveIndex(index);
  };

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Header />
        </AppBar>
        <ProjectDrawer
          projects={data.projects}
          activeIndex={activeIndex}
          changeActiveIndex={changeActiveIndex}
        />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {data.projects[activeIndex] && (
            <TaskTable tasks={data.projects[activeIndex].tasks} />
          )}
        </main>
      </div>
    </>
  );
}

export default props => (
  <ApolloProvider client={client}>
    <WorkspaceMemberPage {...props} />
  </ApolloProvider>
);
