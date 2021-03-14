//ini untuk memanggil seluruh fungsi sdk di firebase
// import firebase from 'firebase'

// untuk memanggil fung firebse app
import firebase from "firebase/app";

//untuk memanggil fungsi firebase notifikasi login
import "firebase/auth";

//untuk memanggil fungsi firebase penyimpanan
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAVXQur905RNWDcSkJxHnX1kyXqoPJUy6k",
  authDomain: "simple-notes-firebase-93984.firebaseapp.com",
  projectId: "simple-notes-firebase-93984",
  storageBucket: "simple-notes-firebase-93984.appspot.com",
  messagingSenderId: "1078628622772",
  appId: "1:1078628622772:web:7fba4c0f35d3f66842d2e1",
  measurementId: "G-XV6J09Z1ZH",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//agar firebase bisa digunakan di component lainnya
export default firebase;
