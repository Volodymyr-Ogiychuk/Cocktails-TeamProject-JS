import { save, load } from './storage';
let nameCocktails = [];
const COCKTAILS_STORAGE_KEY = 'cocktails';
const btnAdd = document.querySelector('.cocktails.section');
btnAdd.addEventListener('click', getFavoritesCoctails);

function getFavoritesCoctails(event) {
  if (event.target.textContent === 'remove') {
    const idCoctails =
      event.target.parentNode.previousElementSibling.dataset.id;
    //   event.target.textContent = 'Add to';
    // const svg = document.createElement('svg');
    // svg.classList.add('icon__add');
    // const use = document.createElement('use');
    // use.href = './image/symbol-defs.svg#icon-Heart';
    // use.role = 'button';
    // svg.appendChild(use);
    // console.log(svg);
    event.target.innerHTML = ` Add to
                  <svg class="icon__add" width="18" height="18">
                    <use
                      href="./image/symbol-defs.svg#icon-Heart"
                      aria-label="img"
                      role="button"
                    ></use>
                  </svg>`;

    removeId(idCoctails);
    save(COCKTAILS_STORAGE_KEY, nameCocktails);
    console.log(nameCocktails);
    return;
  }
  if (event.target.classList.contains('btn-add')) {
    const idCoctails =
      event.target.parentNode.previousElementSibling.dataset.id;
    nameCocktails.push(idCoctails);
    save(COCKTAILS_STORAGE_KEY, nameCocktails);
    event.target.textContent = 'remove';
    // console.log(event.target);
    console.log(nameCocktails);
  }
}
function removeId(idCoctails) {
  nameCocktails = nameCocktails.filter(item => item !== idCoctails);
  //   console.log(nameCocktails);
}
