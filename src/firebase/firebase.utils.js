import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAmWf9K4kpYj9Um3RuyBC4I2BZJ1DK0IAQ',
  authDomain: 'crwn-db-bdde2.firebaseapp.com',
  projectId: 'crwn-db-bdde2',
  storageBucket: 'crwn-db-bdde2.appspot.com',
  messagingSenderId: '390139416834',
  appId: '1:390139416834:web:42450d63bfa6fdf0ba721b',
  measurementId: 'G-0SBMZQCKBM',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, addionalData) => {
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
        ...addionalData,
      });
    } catch (error) {
      console.log('erroe creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
