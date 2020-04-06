import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase/app';


function main() {
  const firebaseConfig = {
    apiKey: "AIzaSyBONNjPTlLxzOX_9-D2YWfV_HL_PsI6iRk",
    authDomain: "mycurious-c7798.firebaseapp.com",
    databaseURL: "https://mycurious-c7798.firebaseio.com",
    projectId: "mycurious-c7798",
    storageBucket: "mycurious-c7798.appspot.com",
    messagingSenderId: "507808666073",
    appId: "1:507808666073:web:45b63c083d84280be789c8",
    measurementId: "G-5PNHZ5VG61"
  };
  firebase.initializeApp(firebaseConfig);

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
}

main();
