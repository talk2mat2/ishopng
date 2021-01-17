
import firebase from 'firebase';

  
  
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyALF9hI1yVglQ5gM-YAlp9pHkEEo1bYSqo",
    authDomain: "ishop-1706a.firebaseapp.com",
    projectId: "ishop-1706a",
    storageBucket: "ishop-1706a.appspot.com",
    messagingSenderId: "231402084002",
    appId: "1:231402084002:web:fe29f8c91ed1c826dfe9fb",
    measurementId: "G-J7WHY6EY1Y"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
export default firebase