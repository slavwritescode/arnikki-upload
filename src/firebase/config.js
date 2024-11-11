import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';
import { getAuth } from "firebase/auth";
import { getFunctions, httpsCallable } from "firebase/functions";
import { getStorage, ref, uploadBytes, getDownloadURL, getBlob, deleteObject } from "firebase/storage";

const config = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_DB_URL,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.MEASUREMENT_ID
}

const app = firebase.initializeApp(config);
//const auth = firebase.auth();

// Init storage and its services
const storage = getStorage(app);
const uploadToStorage = (path, file, metadata) => uploadBytes(ref(storage, path), file, metadata);
const getFileUrl = (path) => getDownloadURL(ref(storage, path));
const getFileBlob = (path) => getBlob(ref(storage, path));
const deleteFile = (path) => deleteObject(ref(storage, path));
// Init services
//const auth = firebase.auth();
const auth = getAuth(app);
const realtimeDb = firebase.database();
const backend = (functionName, params) => httpsCallable(getFunctions(app), functionName)(params);

export { auth, realtimeDb, getAuth, backend, uploadToStorage, getFileUrl, getFileBlob, deleteFile }