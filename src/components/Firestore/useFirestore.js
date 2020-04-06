import React from 'react';

import firebase from 'firebase/app';
import 'firebase/firestore';

export default function useFirestore() {
  const db = React.useMemo(() => firebase.firestore(), []);
  return db;
}
