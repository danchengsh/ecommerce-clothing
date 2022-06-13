import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCyinRplTp_mLztNLA0FL2Oo4s1WOvo_Gg",
    authDomain: "crown-clothing-9d18a.firebaseapp.com",
    projectId: "crown-clothing-9d18a",
    storageBucket: "crown-clothing-9d18a.appspot.com",
    messagingSenderId: "165960867674",
    appId: "1:165960867674:web:375405625adb38c6b99d63"
};
  
const firebaseApp = initializeApp(firebaseConfig); 

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
