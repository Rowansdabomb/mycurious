import React from 'react';
import FullPage from './FullPage';
import { CONTACT_PAGE_ID } from '../utils/ids';

const ContactPage = React.forwardRef((props, ref) => {
  return (
    <FullPage centerAll id={CONTACT_PAGE_ID} ref={ref}>
      Contact Page
    </FullPage>
  )
});

export default ContactPage;
