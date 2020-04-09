import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import useDesktopBreakpoint from '../useDesktopBreakpoint';
import { desktopBreakpoint } from '../../theme';

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    position: 'relative',
    marginTop: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up(desktopBreakpoint)]: {
      width: 'auto',
      height: '100%',
    },
  },
  button: {
    whiteSpace: 'nowrap',
    borderColor: theme.palette.text.light,
    width: '100%',
    color: theme.palette.text.light,
    '&:hover': {
      backgroundColor: theme.palette.background.hover,
    },
    [theme.breakpoints.up(desktopBreakpoint)]: {
      width: 'auto',
      height: '100%',
    },
  },
  progress: {
    position: 'absolute',
  }
}));

export default function JoinMailingListButton({ loading, onClick, addAnother}) {
  const desktopSized = useDesktopBreakpoint();
  console.log('add',addAnother);
  const classes = useStyles();
  return (
    <div className={classes.buttonContainer}>
      {loading && <CircularProgress className={classes.progress}/>}
      <Button 
        disabled={loading}
        variant={desktopSized ? "text" : "outlined"}
        onClick={onClick} 
        className={classes.button}
      >
        {addAnother ? 'Add another email' : 'Join mailing list'}
      </Button>
    </div>
  );
}
