import React from 'react';

import find from 'lodash/find';
import get from 'lodash/get';
import throttle from 'lodash/throttle';

import SiteNav from './Nav/SiteNav';
import TitlePage from './TitlePage/TitlePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import Footer from './Footer';

import CssBaseline from '@material-ui/core/CssBaseline';
import Div100vh from 'react-div-100vh';
import useDesktopBreakpoint from './useDesktopBreakpoint';


export default function Main() {
  const [refs, setRefs] = React.useState([]);
  const [currentSectionId, setCurrentSectionId] = React.useState(null);
  const desktopSized = useDesktopBreakpoint();

  React.useEffect(() => {
    const scrollHandler = throttle(e => {
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
    }, 250);

    let unsubscribe = window.addEventListener('scroll', scrollHandler);

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
    const offset = desktopSized ? 0 : 85;
    window.scrollTo({ top: ref.offsetTop - offset, behavior: 'smooth' })
  }

  const refCallback = (target) => {
    if (target != null && !refs.includes(target)) {
      setRefs(prev => prev.concat(target))
    }
  }

  return (
    <Div100vh style={{display: 'flex', flexDirection: 'column' }} >
      <CssBaseline />
      <SiteNav onChange={handleScrollTo} currentId={currentSectionId} />

      <div id="scroll-container">
        <TitlePage ref={refCallback} />
        <AboutPage ref={refCallback} />
        <ContactPage ref={refCallback} />
        <Footer />
      </div>
    </Div100vh>
  );
}
