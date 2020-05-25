import React from 'react';
import Div100vh from 'react-div-100vh'
import makeStyles from '@material-ui/styles/makeStyles';
import Container from '@material-ui/core/Container';
import cn from 'classnames';
import { commonStyles } from '../theme';

const useStyles = makeStyles(theme => ({
  ...commonStyles(theme),
  bottomRight: {
    position: 'absolute',
    bottom: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.text.light,
  },
  container: {
    height: '100%',
    position: 'relative',
  },
  div100: {
    position: 'relative',
  },
  hero: {
    position: 'absolute',
    top: 0,
    bottom: 0,
  },
  content: {
    padding: 'inherit',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
}))


const Page = React.forwardRef(({ children, id, align, justify, hero }, ref) => {
  const classes = useStyles();

  return (
    <div id={id} ref={ref}>
      <Div100vh className={classes.div100}>
        {hero}
        <Container 
          maxWidth="sm" 
          className={classes.container}
        >
          <div         
            className={cn({
              [classes.content]: true,
              [classes.justifyCenter]: justify === 'center',
              [classes.alignCenter]: align === 'center',
            })}
          > 
            {children}
          </div>
        </Container>
      </Div100vh>
    </div>
  )
});

export default Page;
