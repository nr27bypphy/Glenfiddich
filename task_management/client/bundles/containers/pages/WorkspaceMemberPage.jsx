import React, { useState } from "react";
import { Header } from "../../components/organisms/Header";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import WorkIcon from "@material-ui/icons/Work";
import { TaskTable } from "../../components/organisms/TaskTable";
import { WORKSPACE_MEMBERS_PROJECTS } from "../../tags/WorkspaceMember"
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "../../../lib/ApolloClient/client";
import { useQuery } from "@apollo/react-hooks";
import { LoadingPage } from "./LoadingPage";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  list: {
    backgroundColor: "#313985"
  },
  listText: {
    color: "#fff"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
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
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.toolbar} />
          <List className={classes.list}>
            <ListItem>
              <Typography
                variant="h6"
                align="left"
                className={classes.listText}
              >
                Project
              </Typography>
            </ListItem>
            {data.projects.map((project, index) => (
              <ListItem
                button
                key={index}
                selected={activeIndex == index}
                onClick={() => changeActiveIndex(index)}
              >
                <ListItemIcon style={{ color: "white" }}>
                  <WorkIcon />
                </ListItemIcon>
                <ListItemText
                  primary={project.title}
                  className={classes.listText}
                />
              </ListItem>
            ))}
          </List>
        </Drawer>
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
