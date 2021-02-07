import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDT1OXqf-0W4LPsmGzXxFY35-uLjGpO15M",
    authDomain: "robinhood-klone-nv.firebaseapp.com",
    databaseURL: "https://robinhood-klone-nv.firebaseio.com",
    projectId: "robinhood-klone-nv",
    storageBucket: "robinhood-klone-nv.appspot.com",
    messagingSenderId: "181832573890",
    appId: "1:181832573890:web:6b277eb75a4f13cdb6ec5b",
    measurementId: "G-VDFHNL2LHP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();

  export { db };