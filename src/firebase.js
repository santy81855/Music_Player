import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_Vai2o-5H8SmbIc_R0t4H9nThXmKrM6w",
  authDomain: "music-player-3d713.firebaseapp.com",
  projectId: "music-player-3d713",
  storageBucket: "music-player-3d713.appspot.com",
  messagingSenderId: "472394237950",
  appId: "1:472394237950:web:f6613ad63ee9b7c3aee2af",
  measurementId: "G-9CB5RC9T81"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db &
const db = firebaseApp.firestore();


export default db;