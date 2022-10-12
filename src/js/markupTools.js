export function renderDrinkMarkup(drinksArr) {
  return drinksArr
    .map(({ strDrink, strDrinkThumb, idDrink }) => {
      return `<li class="cocktails__card">
              <div>
                <img src="${strDrinkThumb}" alt="${strDrink}" width="280">
              </div>
              <p class="cocktails__name" data-id="${idDrink}">${strDrink}</p>
              <div class="button-wrapper">
                <button class="btn-lm" type="button">Learn more</button>
                <button class="btn-add" type="button">Add to
                  <svg class="icon__add" width="18" height="18">
                    <use href="./image/symbol-defs.svg#icon-Heart"
                        aria-label="img"
                        role="button"
                    ></use>
                  </svg>
                </button>
              </div>
            </li>`;
    })
    .join('');
}
