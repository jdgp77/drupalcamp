import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCFDpNeAiu8_fsvvYQr5iOd83K7IhKRuO4",
  authDomain: "drupalcampcolombia.firebaseapp.com",
  databaseURL: "https://drupalcampcolombia.firebaseio.com",
  projectId: "drupalcampcolombia",
  storageBucket: "drupalcampcolombia.appspot.com",
  messagingSenderId: "869162878423",
  appId: "1:869162878423:web:b099f7840616e739"
};
const Fire = firebase.initializeApp(config);
export default Fire;