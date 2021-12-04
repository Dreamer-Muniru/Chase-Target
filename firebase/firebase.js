import * as firebase from 'firebase';
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD9seHAggZbQ8xNBzD4xahSJO3RdKzT3B4",
    authDomain: "govpro-71a2f.firebaseapp.com",
    projectId: "govpro-71a2f",
    storageBucket: "govpro-71a2f.appspot.com",
    messagingSenderId: "541218225526",
    appId: "1:541218225526:web:8acc90bd096af206e14e57"
  };
  
  
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);
  export default firebase;