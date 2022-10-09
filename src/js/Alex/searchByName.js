import { getCocktailByName } from '../getCocktails';
import { renderDrinkMarkup } from '../markupTools';

const searchFormRef = document.querySelector('#search-form');
const cocktailsListRef = document.querySelector('.cocktails__list');
const searchFailRef = document.querySelector('.not-found');
const cocktailsTitleRef = document.querySelector('.cocktails__title');

searchFormRef.addEventListener('submit', onSearchSubmit);

function onSearchSubmit(e) {
  e.preventDefault();
  const userInput = searchFormRef.elements.searchQuery.value;
  cocktailsTitleRef.classList.remove('is-hidden');
  searchFailRef.classList.add('is-hidden');

  getCocktailByName(userInput)
    .then(({ drinks }) => {
      if (!userInput) throw new Error();

      cocktailsListRef.innerHTML = renderDrinkMarkup(drinks);
    })
    .catch(error => {
      console.log(error);
      // display 'Sorry, we didn't find any cocktail for you'
      cocktailsListRef.innerHTML = '';
      searchFailRef.classList.remove('is-hidden');
      cocktailsTitleRef.classList.add('is-hidden');
    });
}
