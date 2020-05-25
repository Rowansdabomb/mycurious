import React from 'react';
import './App.css';

import ThemeProvider from '@material-ui/styles/ThemeProvider';
import theme from './theme';
import Main from './components/Main';


function App() {
  React.useEffect(() => {
    window.MUItheme = theme;
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
