import React, { useState }  from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
  },
}));
export const SideMenu = side => {
  const classes = useStyles();
  return(
    <div
    className={classes.list}
    role="presentation"
    >
    <List>
    {['DashBoard', 'User Management', 'Project managemen'].map((text) => (
      <ListItem button key={text}>
      <ListItemText primary={text} />
      </ListItem>
    ))}
    </List>
    <Divider />
    </div>
  )
};
