import React from 'react';
import FullPage from './FullPage';
import { ABOUT_PAGE_ID } from '../utils/ids';


const AboutPage = React.forwardRef((props, ref) => {
  return (
    <FullPage ref={ref} centerAll id={ABOUT_PAGE_ID}>
      About Page
    </FullPage>
  )
});

export default AboutPage;
