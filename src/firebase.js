import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "process.env.AIzaSyBiPqo1QrrANYWLhBgPOJvo-t7h1PLMVEM",
  authDomain: "process.env.redux-help-queue-61632.firebaseapp.com",
  databaseURL: "process.env.https://redux-help-queue-61632.firebaseio.com",
  projectId: "process.env.redux-help-queue-61632",
  storageBucket: "process.env.redux-help-queue-61632.appspot.com",
  messagingSenderId: "process.env.361652709983",
  appId: "process.env.1:361652709983:web:76169d3a31ff5ccc1089ea"
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
