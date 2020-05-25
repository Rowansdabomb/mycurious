import React from 'react';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  bottomRight: {
    position: 'absolute',
    bottom: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.text.light,
  },
  hero: {
    minHeight: '50vh',
    position: 'absolute',
    top: 0,
    bottom: 0,
  }
}))

export default function HeroImage({ image, position }) {
  const classes = useStyles();
  const { url, credits } = image || {};
  const style = { 
    backgroundImage: `url(${url})`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: position ? 'absolute' : 'relative',
    top: position === 'bottom' ? '50%' : 0,
    bottom: position === 'top' ? '50%' : 0,
    left: position === 'right' ? '50%' : 0,
    right: position === 'left' ? '50%' : 0,
  };
  return (
    <div style={style} className={classes.hero}>
      {credits && (
        <div className={classes.bottomRight}>
          <Typography variant="subtitle1">
            {credits}
          </Typography>
        </div>
      )}
    </div>
  )
}
