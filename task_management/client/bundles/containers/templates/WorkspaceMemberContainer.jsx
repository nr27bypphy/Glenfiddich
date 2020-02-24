import React from "react";
import { Header } from "../../components/organisms/Header";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import { TaskTable } from "../../components/organisms/TaskTable";
import { ProjectDrawer } from "../../components/organisms/ProjectDrawer";

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

export const WorkspaceMemberContainer = ({projects, activeIndex, changeActiveIndex}) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Header />
        </AppBar>
        <ProjectDrawer
          projects={projects}
          activeIndex={activeIndex}
          changeActiveIndex={changeActiveIndex}
        />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {projects[activeIndex] && (
            <TaskTable tasks={projects[activeIndex].tasks} />
          )}
        </main>
      </div>
    </>
  );
}
