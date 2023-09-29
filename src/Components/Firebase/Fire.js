import firebase from 'firebase';
  
const firebaseConfig = {
  apiKey: "AIzaSyDtRbwizM88CHr8XbdbgsYaor3SBXaXmwo",
  authDomain: "laborer-6f0e6.firebaseapp.com",
  projectId: "laborer-6f0e6",
  storageBucket: "laborer-6f0e6.appspot.com",
  messagingSenderId: "251387291264",
  appId: "1:251387291264:web:b5a897a5d1f1711cb56865"
};
    
const fire = firebase.initializeApp(firebaseConfig);
  
export default fire;
