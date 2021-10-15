import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCfTO-5Z5JbclZLQ4jvE-r755FuJvhKpNc",
    authDomain: "react-native-firebase-30f3e.firebaseapp.com",
    projectId: "react-native-firebase-30f3e",
    storageBucket: "react-native-firebase-30f3e.appspot.com",
    messagingSenderId: "195433468489",
    appId: "1:195433468489:web:c28cc5431d93772c58e598"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const bd = firebase.firestore();
  
  export default {
      firebase,
      bd
  };