import  React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import WorkIcon from "@material-ui/icons/Work";

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
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
  toolbar: theme.mixins.toolbar,
}));

export const ProjectDrawer = ({projects, activeIndex, changeActiveIndex}) => {
  const classes = useStyles();

  return (
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
  );
}
