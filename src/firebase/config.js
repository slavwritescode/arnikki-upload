import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
const env = await import.meta.env;

const config = {
    apiKey: env.VITE_API_KEY,
    authDomain: env.VITE_AUTH_DOMAIN,
    databaseURL: env.VITE_DB_URL,
    projectId: env.VITE_PROJECTID,
    storageBucket: env.VITE_STORAGE_BUCKET,
    messagingSenderId: env.VITE_MESSAGING_SENDER,
    appId: env.VITE_APP_ID,
    measurementId: env.MEASUREMENT_ID
}
const app = initializeApp(config);

//init the services
const storage = getStorage(app);
const auth = firebase.auth();
const realtimeDb = firebase.database();

export { auth, realtimeDb, getAuth, storage };