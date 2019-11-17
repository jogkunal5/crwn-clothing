import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC8hOIwtNiVxDzriEpjxXuPj0AuRJ0Dw0M",
    authDomain: "crwn-db-fc3b6.firebaseapp.com",
    databaseURL: "https://crwn-db-fc3b6.firebaseio.com",
    projectId: "crwn-db-fc3b6",
    storageBucket: "crwn-db-fc3b6.appspot.com",
    messagingSenderId: "922185780073",
    appId: "1:922185780073:web:7da8b970d6f8ec1d12cbf8",
    measurementId: "G-921XZ8M0DY"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('Error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;