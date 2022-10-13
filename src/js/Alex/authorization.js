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
import { getCocktailById } from '../getCocktails';
import { renderDrinkMarkup } from '../markupTools';

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
const regFormTitleRef = document.querySelector('.reg-form-title');

// Buttons logic
regBtnRef.addEventListener('click', onRegClick);
signinBthRef.addEventListener('click', onSignInClick);
logoutBtnRef.addEventListener('click', onLogOutClick);

function onRegClick(e) {
  e.preventDefault();

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
    onSignOff();
  } else {
    // User is signed out
    console.log('signed out');
    onSignOut();
  }
});

function onSignOut() {
  regFormTitleRef.textContent = 'Success! ✔';
  regFormTitleRef.classList.add('success-auth');
  document.querySelector('.reg-form').style.display = 'none';
  setTimeout(() => {
    document.querySelector('.back-drop-reg').classList.add('is-hide');
    regFormTitleRef.textContent = 'Please log in or create new account';
    regFormTitleRef.classList.remove('success-auth');
    document.querySelector('.reg-form').style.display = 'block';
  }, 1000);
}

function onSignOff() {
  regFormTitleRef.textContent = `Success! ✔`;
  regFormTitleRef.classList.add('success-auth');
  document.querySelector('.reg-form').style.display = 'none';
  setTimeout(() => {
    document.querySelector('.back-drop-reg').classList.add('is-hide');
    regFormTitleRef.textContent = 'Please log in or create new account';
    regFormTitleRef.classList.remove('success-auth');
    document.querySelector('.reg-form').style.display = 'block';
  }, 1000);
}

//Add, remove, render favorites
const cocktailsRef = document.querySelector('.cocktails.section');
const cocktailsListRef = document.querySelector('.cocktails__list');
const linkFavRef = document.querySelector('.link-elem');

cocktailsRef.addEventListener('click', onAddClick);

function onAddClick(e) {
  if (e.target.classList.contains('btn-add')) {
    const drinkID = event.target.parentNode.previousElementSibling.dataset.id;
    addToFavorite(drinkID, uid);
  }
}

linkFavRef.addEventListener('click', e => {
  e.preventDefault();

  getFavDrink(uid).then(async drinkIdArr => {
    let arrayToRender = [];

    const arrayOfPromises = drinkIdArr.map(async drinkId => {
      return await getCocktailById(drinkId);
    });

    const drinks = await Promise.all(arrayOfPromises);

    drinks.map(({ drinks }) => {
      arrayToRender.push(drinks[0]);
    });

    document.querySelector('.hero').style.display = 'none';
    document.querySelector('.cocktails__title').innerHTML =
      'Favorite cocktails';
    cocktailsListRef.innerHTML = renderDrinkMarkup(arrayToRender);
  });
});

authBtnRef.addEventListener('click', onAuthBtnClick);

function onAuthBtnClick() {
  document.querySelector('.back-drop-reg').classList.remove('is-hide');
}

document.querySelector('.reg-close-btn').addEventListener('click', () => {
  document.querySelector('.back-drop-reg').classList.add('is-hide');
});
