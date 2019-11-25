import React, { useState }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import MenuIcon from "@material-ui/icons/Menu";
import { SideMenu } from "./SideMenu"

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
}));

export const SideBarButton = props =>{
  const classes = useStyles();
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  return (
    <div>
      <Button
        onClick={toggleDrawer('left', true)}
        className={classes.menuButton}
        color="inherit"
        edge="start"
        aria-label="menu"
      >
        <MenuIcon />
      </Button>
      <Drawer
        open={state.left}
        onClose={toggleDrawer('left', false)}
      >
      <SideMenu
       side="left"
       onClick={toggleDrawer("left", false)}
       onKeyDown={toggleDrawer("left", false)}
      >
      </SideMenu>
      </Drawer>
    </div>
  );
}
