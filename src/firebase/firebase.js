import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDnYeI3Xo12jpY1R3oSKA1vJYFQf9sbi4w",
    authDomain: "react-firebase-authentic-73dd4.firebaseapp.com",
    databaseURL: "https://react-firebase-authentic-73dd4.firebaseio.com",
    projectId: "react-firebase-authentic-73dd4",
    storageBucket: "react-firebase-authentic-73dd4.appspot.com",
    messagingSenderId: "732307035809",
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  const auth = firebase.auth();

  export {
    auth,
    };