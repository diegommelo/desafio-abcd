import firebase from "firebase/app";
import "firebase/firestore";
import firebaseConfig from "./firebase-config";

export const db = firebase.initializeApp(firebaseConfig).firestore();