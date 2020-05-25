import React from 'react';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Avatar from '@material-ui/core/Avatar';
import { links } from './util';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  container: {
    zIndex: theme.zIndex.appBar,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: theme.palette.background.hover,
  },
  root: {
    color: theme.palette.text.light,
    backgroundColor: theme.palette.background.lightTransparent,
    '&:hover': {
      backgroundColor: theme.palette.background.hover,
    }
  },
  selected: {
    color: theme.palette.secondary.main
  },
}))

export default function AppBar({
  currentId, onChange, 
}) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Tabs
        value={currentId || links[0].id}
        onChange={(_, v) => onChange(v)}
        variant="fullWidth"
        indicatorColor="secondary"
        aria-label="icon label tabs example"
      >
        {links.map(({ alt, src, title, id }) => (
          <Tab 
            key={id}
            className={classes.root}
            classes={{selected: classes.selected}}
            icon={<Avatar alt={alt} src={src}/>} 
            label={title} 
            value={id}
          />
        ))}
      </Tabs>
    </div>
  )
}
