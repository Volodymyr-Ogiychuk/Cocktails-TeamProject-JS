export function addToFavorite(drinkId, uid) {
  fetch(
    `https://cocktails-teamproject-default-rtdb.europe-west1.firebasedatabase.app/favorite/${uid}.json`,
    {
      method: 'POST',
      body: JSON.stringify(drinkId),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  ).then(resp => resp.json().then(console.log));
}

console.log('hi');
// console.log(addToFavorite('fromuser'));

export function getFavDrink(uid) {
  return fetch(
    `https://cocktails-teamproject-default-rtdb.europe-west1.firebasedatabase.app/favorite/${uid}.json`
  ).then(resp => resp.json().then(data => Object.values(data)));
}

{
  /* <button
          class="auth-btn"
          type="button"
          style="
            width: 33px;
            height: 33px;
            background-repeat: no-repeat;
            background-size: cover;
            border: none;
            cursor: pointer;
            margin-bottom: 10px;
            margin-top: 10px;
          "
        >
          <svg class="auth-btn-icon" width="33" height="33">
            <use href="./images/auth-btn-icon.svg"></use>
          </svg>
        </button>

        <form id="registration-form">
          <input
            type="text"
            placeholder="Email"
            name="email"
            id="email"
            required
          />
          <input
            type="text"
            placeholder="Password"
            name="password"
            id="password"
            required
          />
          <button class="registration-btn" type="submit">Registration</button>
          <button class="signin-btn" type="submit">Log In</button>
          <button class="logout-btn" type="button">Log Out</button>
        </form> */
}

// // import { save, load } from './storage';
// let nameCocktails = [];
// const COCKTAILS_STORAGE_KEY = 'cocktails';
// const btnAdd = document.querySelector('.cocktails.section');
// const btn = document.querySelector('.btn-add');

// btnAdd.addEventListener('click', getFavoritesCoctails);
// function getFavoritesCoctails(event) {
//   if (event.target.textContent === 'remove') {
//     const idCoctails =
//       event.target.parentNode.previousElementSibling.dataset.id;
//     //   event.target.textContent = 'Add to';
//     // const svg = document.createElement('svg');
//     // svg.classList.add('icon__add');
//     // const use = document.createElement('use');
//     // use.href = './image/symbol-defs.svg#icon-Heart';
//     // use.role = 'button';
//     // svg.appendChild(use);
//     // console.log(svg);
//     event.target.innerHTML = ` Add to
//                   <svg class="icon__add" width="18" height="18">
//                     <use
//                       href="./image/symbol-defs.svg#icon-Heart"
//                       aria-label="img"
//                       role="button"
//                     ></use>
//                   </svg>`;
//     removeId(idCoctails);
//     // save(COCKTAILS_STORAGE_KEY, nameCocktails);
//     console.log(nameCocktails);
//     return;
//   }
//   if (event.target.classList.contains('btn-add')) {
//     const idCoctails =
//       event.target.parentNode.previousElementSibling.dataset.id;
//     nameCocktails.push(idCoctails);
//     // save(COCKTAILS_STORAGE_KEY, nameCocktails);
//     event.target.textContent = 'remove';
//     // console.log(event.target);
//     console.log(nameCocktails);
//   }
// }
// function removeId(idCoctails) {
//   nameCocktails = nameCocktails.filter(item => item !== idCoctails);
//   //   console.log(nameCocktails);
// }
