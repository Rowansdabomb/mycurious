import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';

import Typography from '@material-ui/core/Typography';
import Page from '../Page';
import TextField from '@material-ui/core/TextField';
import { TITLE_PAGE_ID } from '../../utils/ids';
import chantrelleBackground from '../../assets/chantrelleHero.jpg';
import useMailingList from '../Firestore/useMailingList';
import useDesktopBreakpoint from '../useDesktopBreakpoint';
import JoinMailingListButton from './JoinMailingListButton';
import CenterBox from '../CenterBox';
import { desktopBreakpoint } from '../../theme';
import HeroImage from '../HeroImage';


const useStyles = makeStyles((theme) => ({
  adornedEnd: {
    paddingRight: 0,
    height: 56,
  },
  notchedOutline: {
    borderColor: theme.palette.text.light,
    '&:hover': {
      borderColor: `${theme.palette.text.lightHover} !important`,
    }
  },
  title: {
    textTransform: 'uppercase',
    marginBottom: theme.spacing(1),
  },
  subtitle:{
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 4.1,
    marginBottom: theme.spacing(4),
  },
  textField: {
    '& .MuiInputLabel-outlined': {
      color: theme.palette.text.light,
    },
    '& .MuiInputBase-input': {
      color: theme.palette.text.lightHover,
      [theme.breakpoints.up(desktopBreakpoint)]: {
        borderRight: `1px solid ${theme.palette.text.light}`,
      },
    },
    '& label.Mui-focused': {
      color: theme.palette.text.lightHover,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: theme.palette.text.lightHover,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.text.light,
      },
      '&:hover fieldset': {
        borderColor: theme.palette.text.lightHover,
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.text.lightHover,
      },
    },
    '& .MuiFormHelperText-root': {
      color: theme.palette.text.light,
    },
  },
}));


const TitlePage = React.forwardRef(({ children }, ref) => {
  const desktopSized = useDesktopBreakpoint();
  const classes = useStyles();
  const { addEmail, loading, status, clearStatus } = useMailingList();
  const [email, setEmail] = React.useState('');
  const [blankError, setBlankError] = React.useState(null);

  const handleSubmit = React.useCallback(() => {
    if (email == null || email.length === 0) {
      setBlankError('This field cannot be left blank')
    } else {
      setBlankError(null);
      clearStatus();
      addEmail(email);
    }
  }, [addEmail, clearStatus, email]);

  const inputProps = React.useMemo(() => ({
    classes: { 
      root: classes.inputRoot,
      adornedEnd: classes.adornedEnd, 
      notchedOutline: classes.notchedOutline,
    },
    endAdornment: (
      <JoinMailingListButton 
        onClick={handleSubmit} 
        loading={loading} 
        addAnother={status && status.startsWith('Thanks!')}
      />
    ),
  }), [classes, handleSubmit, loading, status])

  const helperText = React.useMemo(() => {
    if (blankError) {
      return (
        <Typography variant="subtitle1">
          This email doesn't look right
        </Typography>
      )
    }
    if (status) {
      return (
        <Typography variant="subtitle1">
          {status}
        </Typography>
      )
    }
    return null;
  }, [blankError, status])

  return (
    <Page 
      id={TITLE_PAGE_ID} 
      ref={ref} 
      image={{ url: chantrelleBackground, credits: 'Photo by Irina Iriser from Pexels'}}
      hero={
        <HeroImage      
          position="center" 
          image={{ url: chantrelleBackground, credits: 'Photo by Irina Iriser from Pexels'}}
        />
      }
    >
      <CenterBox>
        <Typography variant="h1" className={classes.title} align="center">
          Mycurious
        </Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>
          A book by rosi hunter
        </Typography>
        <Typography variant="body1" align="center" gutterBottom >
          Be the first to know when the book is available
        </Typography>
        <TextField 
          fullWidth
          autoComplete="email"
          variant="outlined"
          label="Email"
          helperText={helperText}
          value={email}
          onChange={e => setEmail(e.target.value)}
          className={classes.textField}
          InputProps={desktopSized ? inputProps : undefined}
        />
        { !desktopSized && (
          <JoinMailingListButton 
            loading={loading} 
            onClick={handleSubmit} 
            addAnother={status && status.startsWith('Thanks!')} 
          />
        )}
      </CenterBox>
    </Page>
  )
})

export default TitlePage;
