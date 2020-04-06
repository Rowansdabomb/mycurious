import React from 'react';
import useFirestore from './useFirestore';

const ERROR_EMAIL_EXISTS = new Error('This email has already been added to the mailing list');

export default function useMailingList() {
  const db = useFirestore();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const addEmail = React.useCallback(async (email) => {
    setLoading(true);
    try {
      const emailRef = db.collection('email_list').doc(email);
      const emailSnap = await emailRef.get();
      if (emailSnap.exists) {
        throw ERROR_EMAIL_EXISTS;
      }
      emailRef.set({ subscribed: true });
    } catch (err) {
      console.log(err);
      switch(err) {
        case ERROR_EMAIL_EXISTS:
          setError(err.msg);
          break;
        default:
          throw error;
      }
    }
    setLoading(false);
  }, [db, error])

  return { addEmail, loading, error }
}
