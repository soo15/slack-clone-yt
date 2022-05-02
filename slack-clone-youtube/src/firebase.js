// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAJ5qW73lsMuzDV9g-RXeA-PeDgrvi_Jfg",
  authDomain: "slack-clone-yt-8c603.firebaseapp.com",
  projectId: "slack-clone-yt-8c603",
  storageBucket: "slack-clone-yt-8c603.appspot.com",
  messagingSenderId: "580191658279",
  appId: "1:580191658279:web:c2c243d56a39c0e3754902"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);;
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export { auth, provider, db };