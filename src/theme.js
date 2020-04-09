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
      hover: '#00000044',
    },
    text: {
      light: '#FFFFFF',
      lightHover: '#FFFFFFcc',
      dark: '#444444',
      darkHover: '#444444cc',
    }
  },
});

theme = responsiveFontSizes(theme, { breakpoints: [desktopBreakpoint], factor: 2.5});

export default theme;
