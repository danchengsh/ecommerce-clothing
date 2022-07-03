import { initializeApp } from 'firebase/app';
import { getAuth,
        signInWithPopup,
        GoogleAuthProvider,
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
        signOut,
        onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch } from 'firebase/firestore';

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
export const db = getFirestore(firebaseApp);
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const createUserDocFromAuth = async (userAuth, additionalInfo) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName, email, createdAt, ...additionalInfo
            });
        } catch (error) {
            console.log('error creating the user ', error.message);
        }
    }
    return userDocRef;
};

export const createAuthUserFromEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);
    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });
    await batch.commit();
    console.log('done');
};
