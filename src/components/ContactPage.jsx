import React from 'react';
import Page from './Page';
import { CONTACT_PAGE_ID } from '../utils/ids';

const ContactPage = React.forwardRef((props, ref) => {
  return (
    <Page justify="center" align="center" id={CONTACT_PAGE_ID} ref={ref}>
      Contact Page
    </Page>
  )
});

export default ContactPage;
