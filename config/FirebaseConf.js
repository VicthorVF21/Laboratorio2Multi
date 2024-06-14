import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB5czgDldigbSrrmZJMBShQEcxUais68xg",
    authDomain: "appfruit-25815.firebaseapp.com",
    projectId: "appfruit-25815",
    storageBucket: "appfruit-25815.appspot.com",
    messagingSenderId: "894573177730",
    appId: "1:894573177730:web:a724d640b350761f557d9b"
  };

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();