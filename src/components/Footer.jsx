import React from 'react';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import makeStyles from '@material-ui/styles/makeStyles';
import theme from '../theme';


const useStyles = makeStyles(() => ({
  footer:{
    width: '100%',
    height: 120,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heartWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginLeft: theme.spacing(0.5),
  }
}))

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Typography variant="body1" color="textSecondary" className={classes.heartWrapper}>
        {`Made with  `}<FavoriteBorderIcon className={classes.icon}/>
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        {new Date().getFullYear()}
      </Typography>
    </div>
  )
}
