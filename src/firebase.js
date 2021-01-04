import firebase from "firebase/app";

import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0JPd29xDzMYd1R1WY169dXZJpFIWhduk",
  authDomain: "youuuuuutubeee.firebaseapp.com",
  projectId: "youuuuuutubeee",
  storageBucket: "youuuuuutubeee.appspot.com",
  messagingSenderId: "698845645223",
  appId: "1:698845645223:web:65764adcd67c827dc10e82",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
