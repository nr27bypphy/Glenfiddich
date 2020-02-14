import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  list: {
    width: 250
  }
}));

const sideMenuContent = [
  { text: "ダッシュボード", path: "/" },
  { text: "ユーザー一覧", path: "/workspace_members" },
  { text: "ユーザー詳細", path: "/projects" }
];

export const SideMenu = side => {
  const classes = useStyles();
  return (
    <div className={classes.list} role="presentation">
      <List>
        {sideMenuContent.map((item, index) => (
          <ListItem button component="a" href={item.path} key={index}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );
};
