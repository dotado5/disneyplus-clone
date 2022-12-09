import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDj0-95YnI9imf9jWc93AhcALBgvL0BAas",
  authDomain: "disney-clone-9fa60.firebaseapp.com",
  projectId: "disney-clone-9fa60",
  storageBucket: "disney-clone-9fa60.appspot.com",
  messagingSenderId: "321545174614",
  appId: "1:321545174614:web:3d05b58ab4a96371c745f7",
  measurementId: "G-DRVLJKWRWG",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()

export { auth, provider, storage }
export default db
