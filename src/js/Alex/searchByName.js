import { getCocktailByName } from '../getCocktails';
import { renderDrinkMarkup } from '../markupTools';
import { load } from '../Vitalik/storage';

// Refs
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

      // Check if localstorage has item - change button
      document.querySelectorAll('.btn-add').forEach(button => {
        const drinkId = button.parentNode.previousElementSibling.dataset.id;
        if (load('cocktails').includes(drinkId)) {
          button.textContent = 'Remove';
        }
      });
    })
    .catch(error => {
      console.log(error);
      // display 'Sorry, we didn't find any cocktail for you'
      cocktailsListRef.innerHTML = '';
      searchFailRef.classList.remove('is-hidden');
      cocktailsTitleRef.classList.add('is-hidden');
    });
}
