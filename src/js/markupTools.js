export function renderDrinkMarkup(drinksArr) {
  return drinksArr
    .map(({ strDrink, strDrinkThumb }) => {
      return `<li>
              <div>
                <img src="${strDrinkThumb}" alt="${strDrink}" width="280">
              </div>
              <p>${strDrink}</p>
              <button class="btn-lm" type="button">Learn more</button>
              <button class="btn-add" type="button">Add to</button>
            </li>`;
    })
    .join('');
}
