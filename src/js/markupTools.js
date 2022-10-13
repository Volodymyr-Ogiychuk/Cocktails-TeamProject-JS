export function renderDrinkMarkup(drinksArr) {
  return drinksArr
    .map(({ strDrink, strDrinkThumb, idDrink }) => {
      return `<li class="cocktails__card">
              <div>
                <img class="cocktails__image" src="${strDrinkThumb}" alt="${strDrink}" width="280">
              </div>
              <p class="cocktails__name" data-id="${idDrink}">${strDrink}</p>
              <div class="button-wrapper">
                <button class="btn-lm" type="button">Learn more</button>
                <button class="btn-add" type="button">Add to</button>
              </div>
            </li>`;
    })
    .join('');
}

export function renderIngredientsMarkup(ingredientsArr) {
  return ingredientsArr
    .map(({ idIngredient, strType, strIngredient }) => {
      return `<li class="ingredients__card">
              <h3 class="ingredients__title">${strIngredient}</h3>
              <p class="ingredients__text">${strType}</p>
              <div class="button-wrapper" data-ingr="${idIngredient}">
                <button class="btn-lm" type="button">Learn more</button>
                <button class="btn-add-fav" type="button">Add to favorite</button>
              </div>
            </li>`;
    })
    .join('');
}
