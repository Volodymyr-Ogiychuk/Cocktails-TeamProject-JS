export function paginator(drinksList) {
  let arr1 = [];
  let counter1 = 0;
  
  arr1 = drinksList.splice(0, cardsPerPage);
  drinksList2 = drinksList;  
  const cardMarkup = renderDrinkMarkup(arr1);
  cocktList.innerHTML = '';
  cocktList.insertAdjacentHTML('beforeend', cardMarkup);
  counter1 += 1;
}

export function paginator2(counter1, arr1) {

if (counter1 !== 0) {
  if (drinksList2.length <= cardsPerPage) {
          const cardMarkup = renderDrinkMarkup(drinksList);
          cocktList.insertAdjacentHTML('beforeend', cardMarkup);
          btnLoadMoreRef.style.display = 'none';
          counter1 += 1;
        } else {
        arr1 = drinksList2.splice(0, cardsPerPage);
        const cardMarkup = renderDrinkMarkup(arr1);
        cocktList.insertAdjacentHTML('beforeend', cardMarkup);
        counter1 += 1;
  }
  }
  }