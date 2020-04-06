import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

const theme = createMuiTheme({
  palette: {
    background: {
      hover: '#00000044',
    },
    text: {
      light: '#FFFFFF',
      lightHover: '#FFFFFFcc',
      dark: '#444444',
      darkHover: '#444444cc',
    }
  }
});

export default theme;
