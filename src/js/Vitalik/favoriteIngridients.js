import { save, load } from './storage';
export let arrIdIngridients = [];
const INGRIDIENTS_STORAGE_KEY = 'ingridients';
const btnAdd = document.querySelector('.modal__ingredients');
document
  .querySelector('.cocktails__list')
  .addEventListener('click', getFavoritesIngridients);
btnAdd.addEventListener('click', getFavoritesIngridients);
function getFavoritesIngridients(event) {
  if (event.target.classList.contains('btn-add-fav')) {
    if (event.target.textContent === 'Remove') {
      const idIngredient = event.target.parentNode.dataset.ingr;
      event.target.textContent = 'Add to favorite';
      removeId(idIngredient);
      save(INGRIDIENTS_STORAGE_KEY, arrIdIngridients);
      console.log(arrIdIngridients);
      return;
    }
    const idIngredient = event.target.parentNode.dataset.ingr;
    arrIdIngridients.push(idIngredient);
    save(INGRIDIENTS_STORAGE_KEY, arrIdIngridients);
    event.target.textContent = 'Remove';
    // console.log(event.target);
    console.log(arrIdIngridients);
  }
}

function removeId(idIngredient) {
  arrIdIngridients = arrIdIngridients.filter(item => item !== idIngredient);
  //   console.log(nameCocktails);
}
