import React from 'react';
import Div100vh from 'react-div-100vh'
import makeStyles from '@material-ui/styles/makeStyles';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import cn from 'classnames';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  bottomRight: {
    position: 'absolute',
    bottom: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.text.light,
  },
  container: {
    height: '100%',
  },
  centerAll: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
}))

const FullPage = React.forwardRef(({ children, id, centerAll, image }, ref) => {
  const classes = useStyles();

  const { url, credits } = image || {};
  return (
    <div id={id} ref={ref} style={{ backgroundImage: `url(${url})`, backgroundSize: 'cover'}}>
      <Div100vh>
        <Container 
          maxWidth="md" 
          className={cn({
            [classes.container]: true, 
            [classes.centerAll]: centerAll
          })}
        >
          {children}
        </Container>
        {credits && (
          <div className={classes.bottomRight}>
            <Typography variant="subtitle1">
              {credits}
            </Typography>
          </div>
        )}
        <Divider />
      </Div100vh>
    </div>
  )
});

export default FullPage;
