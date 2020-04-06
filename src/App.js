import React from 'react';
import './App.css';

import find from 'lodash/find';
import get from 'lodash/get';

import SiteDrawer from './components/SiteDrawer';
import TitlePage from './components/TitlePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

import CssBaseline from '@material-ui/core/CssBaseline';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import theme from './theme';
import Div100vh from 'react-div-100vh';


function App() {
  const [refs, setRefs] = React.useState([]);
  const [currentSectionId, setCurrentSectionId] = React.useState(null);

  React.useEffect(() => {
    let unsubscribe = window.addEventListener('scroll', (e) => {
      const { target } = e;
      const scrollTop = get(target, 'scrollingElement.scrollTop');
      refs.forEach((ref, index) => {
        const { id, offsetTop, scrollHeight } = ref;
        if (scrollTop >= offsetTop - scrollHeight / 2
            && scrollTop < offsetTop + scrollHeight / 2
            && currentSectionId !== id
        ) {
          setCurrentSectionId(id);
        }
      })
      console.log('');
    }, [setCurrentSectionId])

    return () => {
      if (unsubscribe) {
        if (unsubscribe.removeEventListener) {
          unsubscribe.removeEventListener('scroll');
        } else {
          unsubscribe.detachEvent('scroll');
        }
      }

    }
  }, [currentSectionId, refs])

  const handleScrollTo = (id) => {
    const ref = find(refs, r => r.id === id);
    window.scrollTo({ top: ref.offsetTop, behavior: 'smooth' })
  }

  const refCallback = (target) => {
    if (target != null && !refs.includes(target)) {
      setRefs(prev => prev.concat(target))
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Div100vh style={{display: 'flex', flexDirection: 'column' }} >
        <CssBaseline />
        <SiteDrawer onClick={handleScrollTo} currentId={currentSectionId} />
        <div id="scroll-container">
          <TitlePage ref={refCallback} />
          <AboutPage ref={refCallback} />
          <ContactPage ref={refCallback} />
        </div>
      </Div100vh>
    </ThemeProvider>
  );
}

export default App;
