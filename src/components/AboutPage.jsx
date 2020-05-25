import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import HeroImage from './HeroImage';
import { ABOUT_PAGE_ID } from '../utils/ids';
import boleteBackground from '../assets/boleteHero.jpg';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  }
}))


const AboutPage = React.forwardRef((props, ref) => {
  const classes = useStyles();
  return (
    <div id={ABOUT_PAGE_ID} ref={ref} className={classes.content}>
      <Container maxWidth="sm" className={classes.container}>
        <Typography variant="h4" gutterBottom>
          About the book
        </Typography>
        <Typography variant="body1" gutterBottom>
          The world of mushroom foraging is mysterious and complex. 
          Where do you look? How can you be sure it’s not poisonous? What is a volva?
        </Typography>
        <Typography variant="body1" gutterBottom>
          This book will be your best friend, your comprehensive guidebook to navigate not only 
          the wilderness but also the vast expanse of resources already at your fingertips. 
          I will teach you what I have learned over years of foraging and research, 
          and walk you through everything from scouting a spot to making risotto. 
          Perhaps most importantly, this book will give you confidence in yourself, 
          and in your ability to safely forage your own wild mushrooms. 
          I can’t guarantee what you’ll find or where, but I can guarantee you won’t 
          find any growing out of your couch. So what are you waiting for?
        </Typography>
        <Typography variant="body1" gutterBottom>
          Let me teach you to hunt, so you can eat for a lifetime.
        </Typography>
      </Container>
      <HeroImage       
          // position="bottom"
          height='50%'
          image={{ url: boleteBackground, credits: 'Photo by Valeria Boltneva from Pexels'}}
        />
    </div>
  )
});

export default AboutPage;
