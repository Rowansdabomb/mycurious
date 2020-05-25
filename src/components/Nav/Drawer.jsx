import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import makeStyles from '@material-ui/styles/makeStyles';
import cn from 'classnames';
import { links } from './util';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    height: '100%',
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    color: theme.palette.text.light,
  },
  drawerPaperLeft: {
    borderRight: 'none',
  },
  item:{
    backgroundColor: theme.palette.background.lightTransparent,
    '&:hover': {
      backgroundColor: theme.palette.background.hover,
    }
  },
  selected: {
    color: theme.palette.secondary.main,
    background: theme.palette.background.hover,
  },
  listItemText: {
    paddingLeft: theme.spacing(1),
  },
}))

export default function SiteDrawer({ onClick, currentId }) {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      anchor="left"
      elevation={0}
      classes={{
        paper: classes.drawerPaper,
        paperAnchorLeft: classes.drawerPaperLeft,
      }}
    >
      <List>
        {links.map(({ alt, src, title, id }) => (
          <ListItem 
            button 
            key={id} 
            className={cn({
              [classes.item]: true,
              [classes.selected]: currentId === id,
            })}
            onClick={() => onClick(id)} 
          >
            <ListItemAvatar>
              <Avatar alt={alt} src={src}/>
            </ListItemAvatar>
            <ListItemText primary={title} className={classes.listItemText} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}
