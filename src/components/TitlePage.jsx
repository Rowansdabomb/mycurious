import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FullPage from './FullPage';
import TextField from '@material-ui/core/TextField';
import { TITLE_PAGE_ID } from '../utils/ids';
import chantrelleBackground from '../assets/chantrelleHero.jpg';
import useMailingList from './Firestore/useMailingList';

const useStyles = makeStyles((theme) =>{ console.log(theme); return ({
  adornedEnd: {
    paddingRight: 0,
    height: 56,
  },
  button: {
    whiteSpace: 'nowrap',
    height: '100%',
    color: theme.palette.text.light,
    '&:hover': {
      backgroundColor: theme.palette.background.hover,
    }
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
    backgroundColor: theme.palette.background.hover,
  },
  notchedOutline: {
    borderColor: theme.palette.text.light,
    '&:hover': {
      borderColor: `${theme.palette.text.lightHover} !important`,
    }
  },
  endAdornment: {
    position: 'relative',
    borderLeft: `1px solid ${theme.palette.text.light}`,
    height: '100%',
  },
  inputRoot: {
    '&:hover': {
      borderColor: 'red',
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
  },
})});


const TitlePage = React.forwardRef(({ children }, ref) => {
  const classes = useStyles();
  const { addEmail, loading, error: mailingError } = useMailingList();
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState(null);

  const handleSubmit = React.useCallback(() => {
    if (email == null || email.length === 0) {
      setError('This field cannot be left blank')
    } else {
      setError(null);
      console.log(email)
      addEmail(email);
      // TODO: add email to a mailing list
    }
  }, [addEmail, email]);

  const inputProps = React.useMemo(() => ({
    classes: { 
      root: classes.inputRoot,
      adornedEnd: classes.adornedEnd, 
      notchedOutline: classes.notchedOutline,
    },
    endAdornment: (
      <div className={classes.endAdornment}>
        <Button variant="text" onClick={handleSubmit} className={classes.button}>
          Join mailing list
        </Button>
      </div>
    ),
  }), [classes, handleSubmit])

  console.log(mailingError)

  return (
    <FullPage 
      id={TITLE_PAGE_ID} 
      ref={ref} 
      image={{ url: chantrelleBackground, credits: 'Photo by Irina Iriser from Pexels'}}
    >
      <div className={classes.container}>
        <div className={classes.centerBox}>
          <Typography variant="h1" className={classes.title}>
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
            error={error}
            helperText={error || mailingError}
            value={email}
            onChange={e => setEmail(e.target.value)}
            className={classes.textField}
            InputProps={inputProps}
          />
        </div>
      </div>
    </FullPage>
  )
})

export default TitlePage;
