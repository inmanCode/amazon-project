import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCOBWf3QcKAcNx5_r8-pxEhbLTBuXFkCXk',
  authDomain: 'amzn-clone-f4ae3.firebaseapp.com',
  projectId: 'amzn-clone-f4ae3',
  storageBucket: 'amzn-clone-f4ae3.appspot.com',
  messagingSenderId: '684455809133',
  appId: '1:684455809133:web:ec5a912abaed920c666f64',
};
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
export default db;
