import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCPV5T-N7R-FszKHBSqsWIzfaqQfuNGSlI",
    authDomain: "nidmix-marketplace.firebaseapp.com",
    projectId: "nidmix-marketplace",
    storageBucket: "nidmix-marketplace.appspot.com",
    messagingSenderId: "503480932681",
    appId: "1:503480932681:web:9a5d5b7cd580347a466298",
    measurementId: "G-KCKFP9P236"
  };

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth }
