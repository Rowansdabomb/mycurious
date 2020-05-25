import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  centerBox: {
    display: 'inline-block',
    color: theme.palette.text.light,
    padding: theme.spacing(4),
    width: '100%',
    maxWidth: theme.breakpoints.values.sm,
    backgroundColor: theme.palette.background.hover,
    zIndex: 1,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
}));

export default function CenterBox({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.centerBox}>
        {children}
      </div>
    </div>
  )
}
