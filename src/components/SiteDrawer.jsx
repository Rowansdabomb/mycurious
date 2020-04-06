import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import cn from 'classnames';

import CriminiIcon from '../assets/criminiIcon.png';
import ChantrelleIcon from '../assets/chantrelleIcon.png';
import KingOysterIcon from '../assets/kingOysterIcon.png';

import makeStyles from '@material-ui/styles/makeStyles';
import { CONTACT_PAGE_ID, ABOUT_PAGE_ID, TITLE_PAGE_ID } from '../utils/ids';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  colorDefault: {
    backgroundColor: 'red',
  },
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
    '&:hover': {
      backgroundColor: theme.palette.background.hover,
    }
  },
  selected: {
    background: theme.palette.background.hover,
  },
  listItemText: {
    paddingLeft: theme.spacing(1),
  },
}))

const links = [
  {
    alt: 'crimini',
    src: CriminiIcon,
    title: 'Home',
    id: TITLE_PAGE_ID,
  },
  {
    alt: 'chantrelle',
    src: ChantrelleIcon,
    title: 'About',
    id: ABOUT_PAGE_ID
  },
  {
    alt: 'king oyster',
    src: KingOysterIcon,
    title: 'Contact',
    id: CONTACT_PAGE_ID,
  },
]

export default function SiteDrawer({ onClick, currentId }) {
  console.log(currentId)
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
              <Avatar alt={alt} src={src} classes={{ colorDefault: classes.colorDefault }}/>
            </ListItemAvatar>
            <ListItemText primary={title} className={classes.listItemText} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}
