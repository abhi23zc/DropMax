
import { initializeApp } from "firebase/app";
import {getFirestore}  from "@firebase/firestore"
import {getStorage} from "firebase/storage"
import {getAuth} from '@firebase/auth' 

const firebaseConfig = {
  apiKey: "AIzaSyC7mUFWSrxxvwehPyR2X8yXJYWd_u_A8U8",
  authDomain: "drop-63cab.firebaseapp.com",
  databaseURL: "https://drop-63cab-default-rtdb.firebaseio.com",
  projectId: "drop-63cab",
  storageBucket: "drop-63cab.appspot.com",
  messagingSenderId: "1006529219742",
  appId: "1:1006529219742:web:d7228028ff415a9932bf8f"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app)
const auth = getAuth(app);

export {db, storage, auth}