import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCps_Omuag8JCs4R_M3KL_Ec9hOltPxz20",

  authDomain: "stb-db.firebaseapp.com",

  projectId: "stb-db",

  storageBucket: "stb-db.appspot.com",

  messagingSenderId: "890425036673",

  appId: "1:890425036673:web:683db1b4ad41c974ff6280",
});

export const auth = app.auth();

export default app;
