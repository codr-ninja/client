import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyApQXf28WjlelRG-837YboYG2cG9Z5YijE',
  authDomain: 'codr-c008e.firebaseapp.com',
  databaseURL: 'https://codr-c008e.firebaseio.com',
  projectId: 'codr-c008e',
  storageBucket: 'codr-c008e.appspot.com',
  messagingSenderId: '77216124197',
  appId: '1:77216124197:web:a7553e7a101f1eb3e15ecc',
  measurementId: 'G-X4Q6LW9WKT',
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
firestore.settings({ timestampsInSnapshots: true });

export default firebase;
