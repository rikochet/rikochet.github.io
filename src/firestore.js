// usage: https://github.com/tylermcginnis/re-base
export const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyCndGBw-eMc6Ti8jtA7G3qRlv009mvNays",
  authDomain: "rikochet-github-io.firebaseapp.com",
  databaseURL: "https://rikochet-github-io.firebaseio.com",
  projectId: "rikochet-github-io",
  storageBucket: "rikochet-github-io.appspot.com",
  messagingSenderId: "984286183310"
});

const settings = {/* your settings... */ timestampsInSnapshots: true};
  
// Initialize Cloud Firestore through Firebase
const firestore = firebase.firestore();
firestore.settings(settings);

export default firestore;