import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD4s0gylxtwXQtuIMsF8vyM__jo7-dmIGM",
  authDomain: "photo-library-b3750.firebaseapp.com",
  projectId: "photo-library-b3750",
  storageBucket: "photo-library-b3750.appspot.com",
  messagingSenderId: "571536217129",
  appId: "1:571536217129:web:622b98e1a30d303ec7b838"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;