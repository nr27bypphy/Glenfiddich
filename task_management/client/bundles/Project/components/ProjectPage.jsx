import React, { useState } from "react";
import { Header } from "../../Shared/components/Header";
import { ApolloProviderWrapper } from "../../Shared/components/ApolloProviderWrapper";

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
import { TaskTable } from "./TaskTable";

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

function ProjectPage(props) {
  const classes = useStyles();
  const projects = JSON.parse(props.projects);
  // table に表示されている Project の index を管理する
  const [activeIndex, setAcitveIndex] = useState(0);

  const changeActiveIndex = index => {
    setAcitveIndex(index);
  };

  return (
    <ApolloProviderWrapper>
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
            {projects.map((project, index) => (
              <ListItem
                button
                key={index}
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
          <TaskTable tasks={projects[activeIndex].tasks} />
        </main>
      </div>
    </ApolloProviderWrapper>
  );
}

export default props => <ProjectPage {...props} />;
