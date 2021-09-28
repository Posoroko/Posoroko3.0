import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyCY1bRwm_KfXITIf9KDC5sSkP2URhP0hwQ",
    authDomain: "posoroko-40214.firebaseapp.com",
    projectId: "posoroko-40214",
    storageBucket: "posoroko-40214.appspot.com",
    messagingSenderId: "140892106372",
    appId: "1:140892106372:web:8685577190abacaa6a9cd1",
    measurementId: "G-7170LRG464"
  };

  //init app
  firebase.initializeApp(firebaseConfig)

  //init products
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

  //timestamp
  const timestamp = firebase.firestore.fieldValue.sererTimestamp

  export { projectFirestore, projectAuth, timestamp }