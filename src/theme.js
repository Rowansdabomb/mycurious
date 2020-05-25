import {createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles'

export const desktopBreakpoint = 'lg';

let theme = createMuiTheme({
  palette: {
    secondary: {
      light: '#ffb74d',
      main: '#ff9800',
      dark: '#f57c00',
    },
    background: {
      hover: '#00000088',
      lightTransparent: '#00000044',
    },
    text: {
      light: '#FFFFFF',
      lightHover: '#FFFFFFcc',
      dark: '#444444',
      darkHover: '#444444cc',
    }
  },
  overrides: {
    MuiTypography: {
      gutterBottom: {
        marginBottom: 16,
      },
    },
  },
});

theme = responsiveFontSizes(theme, { breakpoints: [desktopBreakpoint], factor: 2.5});

export const commonStyles = (theme) => ({
  justifyCenter: {
    display: 'flex',
    justifyContent: 'center',
  },
  justifyStart: {
    display: 'flex',
    justifyContent: 'start',
  },
  justifyEnd: {
    display: 'flex',
    justifyContent: 'end',
  },
  alignCenter: {
    display: 'flex',
    alignItems: 'center',
  },
  alignStart: {
    display: 'flex',
    alignItems: 'start',
  },
  alignEnd: {
    display: 'flex',
    alignItems: 'end',
  },
})

export default theme;
