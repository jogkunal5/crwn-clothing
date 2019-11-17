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

    /**
     * firestore.doc(): Gets a DocumentReference instance that refers to the document at the specified path.
     * @param documentPath — A slash-separated path to a document.
     * @return — The DocumentReference instance.
     */
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    /**
     * get(): By default, get() attempts to provide up-to-date data when possible by waiting for data from the server, 
     * but it may return cached data or fail if you are offline and the server cannot be reached. 
     * This behavior can be altered via the GetOptions parameter.
     * @param options — An object to configure the get behavior.
     * @return - A Promise resolved with a DocumentSnapshot containing the current document contents.
     */
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            // set() inserts data into the document
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

// Creates and initialize firebase instance
firebase.initializeApp(config);

// Gets the auth server for the default app or given app (currenly no parameter means default app)
export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;