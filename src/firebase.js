
import {  initializeApp } from "firebase/app";
import  { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAfAq2rR88X0VVUsN2my5ibw_5V2_t8MFg",
  authDomain: "notebook-1fdb9.firebaseapp.com",
  projectId: "notebook-1fdb9",
  storageBucket: "notebook-1fdb9.appspot.com",
  messagingSenderId: "383910787906",
  appId: "1:383910787906:web:fd935a80ab0dd2236626db",
  databaseURL: "https://notebook-1fdb9-default-rtdb.asia-southeast1.firebasedatabase.app"


};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const database = getDatabase(app);
export const storage = getStorage(app);