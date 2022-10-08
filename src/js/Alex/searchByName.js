import { getCocktailByName } from '../getCocktails';
import { renderDrinkMarkup } from '../markupTools';

const searchFormRef = document.querySelector('#search-form');
const cocktailsListRef = document.querySelector('.cocktails__list');
const searchFailRef = document.querySelector('selector');

searchFormRef.addEventListener('submit', onSearchSubmit);

function onSearchSubmit(e) {
  e.preventDefault();
  const userInput = searchFormRef.elements.searchQuery.value;
  // searchFailRef.classList.add('is-hidden');

  getCocktailByName(userInput)
    .then(({ drinks }) => {
      cocktailsListRef.innerHTML = renderDrinkMarkup(drinks);
    })
    .catch(error => {
      console.log(error);
      // display 'Sorry, we didn't find any cocktail for you'
      // searchFailRef.classList.remove('is-hidden');
    });
}
