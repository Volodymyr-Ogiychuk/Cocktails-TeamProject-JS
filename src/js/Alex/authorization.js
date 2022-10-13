import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { addToFavorite } from './DB';
import { getFavDrink } from './DB';

const firebaseConfig = {
  apiKey: 'AIzaSyARB7IoC0JprBpfrU3Ehfw4t6yt6QUbzT0',
  authDomain: 'cocktails-teamproject.firebaseapp.com',
  projectId: 'cocktails-teamproject',
  storageBucket: 'cocktails-teamproject.appspot.com',
  messagingSenderId: '738965521166',
  appId: '1:738965521166:web:18b2c801811c2fb026cd5f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth module
const auth = getAuth(app);

// Refs
const authBtnRef = document.querySelector('.auth-btn');
const regFormRef = document.querySelector('#registration-form');
const regBtnRef = document.querySelector('.registration-btn');
const signinBthRef = document.querySelector('.signin-btn');
const logoutBtnRef = document.querySelector('.logout-btn');

// Buttons logic
regBtnRef.addEventListener('click', onRegClick);
signinBthRef.addEventListener('click', onSignInClick);
logoutBtnRef.addEventListener('click', onLogOutClick);

function onRegClick(e) {
  e.preventDefault();

  console.log(regFormRef);
  console.log(e.currentTarget);

  const email = regFormRef.elements.email.value;
  const password = regFormRef.elements.password.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      console.log(userCredential);
      console.log('registration successful');
      const user = userCredential.user;
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
}

function onSignInClick(e) {
  e.preventDefault();
  const email = regFormRef.elements.email.value;
  const password = regFormRef.elements.password.value;

  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      console.log('success sign in');
      console.log(user);
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
}

function onLogOutClick(e) {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log('sign out successful');
    })
    .catch(error => {
      // An error happened.
    });
}
let uid = '';
onAuthStateChanged(auth, user => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    uid = user.uid;
    console.log('sign changed', uid);
    // console.log(
    //   user.getIdToken().then(res => console.log(res))
    // );
  } else {
    // User is signed out
    console.log('signed out');
  }
});

const btnAdd = document.querySelector('.btn-add');

btnAdd.addEventListener('click', onAddClick);

function onAddClick() {
  console.log(uid);
  addToFavorite(btnAdd.dataset.id, uid);
}

authBtnRef.addEventListener('click', () => {
  console.log(
    getFavDrink(uid).then(drinkIdArr => {
      drinkIdArr.map(drinkId => {});
    })
  );
});
