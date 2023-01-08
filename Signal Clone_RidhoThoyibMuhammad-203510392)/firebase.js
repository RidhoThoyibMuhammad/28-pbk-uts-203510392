import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDuFGNpf04wCofEds6PWHMJPesgJ-8z-y8",
	authDomain: "signal-clone-ridhothoyib.firebaseapp.com",
	projectId: "signal-clone-ridhothoyib",
	storageBucket: "signal-clone-ridhothoyib.appspot.com",
	messagingSenderId: "263206771673",
	appId: "1:263206771673:web:6063e6fa4197cb40a257c8",
	measurementId: "G-D70BVFJ1KH"
  };

let firebaseApp;

if (firebase.apps.length === 0) {
	firebaseApp = firebase.initializeApp(firebaseConfig);
} else {
	firebaseApp = firebase.app();
}

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
