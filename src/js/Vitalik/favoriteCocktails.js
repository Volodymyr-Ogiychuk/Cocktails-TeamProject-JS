import { save, load } from './storage';
let nameCocktails = [];
const COCKTAILS_STORAGE_KEY = 'cocktails';
const btnAdd = document.querySelector('.cocktails.section');
btnAdd.addEventListener('click', getFavoritesCoctails);

function getFavoritesCoctails(event) {
  if (event.target.classList.contains('btn-add')) {
    if (event.target.textContent === 'Remove') {
      const idCoctails =
        event.target.parentNode.previousElementSibling.dataset.id;
      event.target.textContent = 'Add to';

      removeId(idCoctails);
      save(COCKTAILS_STORAGE_KEY, nameCocktails);
      console.log(nameCocktails);
      return;
    }
    const idCoctails =
      event.target.parentNode.previousElementSibling.dataset.id;
    nameCocktails.push(idCoctails);
    save(COCKTAILS_STORAGE_KEY, nameCocktails);
    event.target.textContent = 'Remove';
    // console.log(event.target);
    console.log(nameCocktails);
  }
}
function removeId(idCoctails) {
  nameCocktails = nameCocktails.filter(item => item !== idCoctails);
  //   console.log(nameCocktails);
}
