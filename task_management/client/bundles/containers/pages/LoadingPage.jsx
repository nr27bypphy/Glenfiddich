import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '0 auto',
    width: '70px',
  },
  content: {
    marginTop: '350px'
  },
  loadingIcon: {
    margin: '0 auto',
    width: '60px'
  },
  loadingText: {
    margin: '0 auto',
    paddingTop: '10px'
  }
}));

export const LoadingPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.loadingIcon}>
          <CircularProgress />
        </div>
        <p className={classes.loadingText}>Loading...</p>
      </div>
    </div>
  );
}
