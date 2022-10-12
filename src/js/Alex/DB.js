export function addToFavorite(drinkId, uid) {
  return fetch(
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
