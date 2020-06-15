import firebase from 'firebase';
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAaLPvr_XL1TS-FESLb_AWBSnH4XNCKY1Y",
  authDomain: "league-one-web.firebaseapp.com",
  databaseURL: "https://league-one-web.firebaseio.com",
  projectId: "league-one-web",
  storageBucket: "league-one-web.appspot.com",
  messagingSenderId: "459412270126",
  appId: "1:459412270126:web:1ecf75c9cb523f6d1443bf",
  measurementId: "G-DGJTDF8MQS"
};

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()

export { db, firebase, auth };