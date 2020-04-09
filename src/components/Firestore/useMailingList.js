import React from 'react';
import useFirestore from './useFirestore';

export default function useMailingList() {
  const db = useFirestore();
  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState(null);

  const addEmail = React.useCallback(async (email) => {
    setLoading(true);
    try {
      const emailRef = db.collection('email_list').doc(email);
      await emailRef.set({ subscribed: true });
    } catch (err) {
      console.error(err);
      setStatus('You are already on the list');
      setLoading(false);
      return;
    }
    setLoading(false);
    setStatus(`Thanks! We'll contact ${email} when the book is available`);
  }, [db])

  const clearStatus = React.useCallback(() => setStatus(null), [setStatus]);

  return { addEmail, loading, status, clearStatus }
}
