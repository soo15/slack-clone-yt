// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAC7s8k2tlbFuRgmB13CrZEV9o3MuF56K0",
    authDomain: "nexflix-clone-fbb10.firebaseapp.com",
    projectId: "nexflix-clone-fbb10",
    storageBucket: "nexflix-clone-fbb10.appspot.com",
    messagingSenderId: "76861690082",
    appId: "1:76861690082:web:45abc6bcae332b97174ebb"
  };



  const firebaseApp = firebase.initializeApp(firebaseConfig);;
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  // const provider = new firebase.auth.GoogleAuthProvider();


  // export { auth, provider, db };
  export { auth, db };