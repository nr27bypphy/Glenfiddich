import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { SideBarButton } from "./SideBarButton";
import { CsrfTokenField } from "../atoms/forms/CsrfTokenField";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  linkText: {
    zIndex: "4",
    // ...defaultFont,
    fontSize: "14px",
    margin: "0px"
  },
  dropdownItem: {
    // ...defaultFont,
    fontSize: "13px",
    padding: "10px 20px",
    margin: "0 5px",
    borderRadius: "2px",
    WebkitTransition: "all 150ms linear",
    MozTransition: "all 150ms linear",
    OTransition: "all 150ms linear",
    MsTransition: "all 150ms linear",
    transition: "all 150ms linear",
    display: "block",
    clear: "both",
    fontWeight: "400",
    lineHeight: "1.42857143",
    // color: grayColor[8],
    whiteSpace: "nowrap",
    height: "unset",
    minHeight: "unset",
    "&:hover": {
      // backgroundColor: primaryColor[0],
      // color: whiteColor,
      // ...primaryBoxShadow
    }
  },
  manager: {
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    },
    display: "inline-block"
  },
  popperClose: {
    pointerEvents: "none"
  }
}));

export const Header = props => {
  const classes = useStyles();
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleChange = event => {
    setAuth(event.target.checked);
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <SideBarButton />
          <Typography variant="h6" className={classes.title}>
            Glenfiddich
          </Typography>
          {auth && (
            <div>
              {!!props.user && props.user.name}
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <form action="/logout" method="POST">
                  <CsrfTokenField />
                  <MenuItem
                    onClick={handleClose}
                    component="button"
                    type="submit"
                  >
                    Logout
                  </MenuItem>
                </form>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};
