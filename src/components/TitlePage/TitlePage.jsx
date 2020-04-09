import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';

import Typography from '@material-ui/core/Typography';
import FullPage from '../FullPage';
import TextField from '@material-ui/core/TextField';
import { TITLE_PAGE_ID } from '../../utils/ids';
import chantrelleBackground from '../../assets/chantrelleHero.jpg';
import useMailingList from '../Firestore/useMailingList';
import useDesktopBreakpoint from '../useDesktopBreakpoint';
import JoinMailingListButton from './JoinMailingListButton';
import { desktopBreakpoint } from '../../theme';


const useStyles = makeStyles((theme) => ({
  adornedEnd: {
    paddingRight: 0,
    height: 56,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  centerBox: {
    display: 'inline-block',
    color: theme.palette.text.light,
    padding: theme.spacing(4),
    width: '100%',
    maxWidth: theme.breakpoints.values.sm,
    backgroundColor: theme.palette.background.hover,
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

  console.log(status, status && status.startsWith('Thanks'));
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
    <FullPage 
      id={TITLE_PAGE_ID} 
      ref={ref} 
      image={{ url: chantrelleBackground, credits: 'Photo by Irina Iriser from Pexels'}}
    >
      <div className={classes.container}>
        <div className={classes.centerBox}>
          <Typography variant="h1" className={classes.title} align="center">
            Mycurious
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitle}>
            A new book by rosi "da mushroom" hunter
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
            InputProps={desktopSized && inputProps}
          />
          { !desktopSized && (
            <JoinMailingListButton 
              loading={loading} 
              onClick={handleSubmit} 
              addAnother={status && status.startsWith('Thanks!')} 
            />
          )}
        </div>
      </div>
    </FullPage>
  )
})

export default TitlePage;
