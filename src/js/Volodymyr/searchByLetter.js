import { getCocktailByLetter } from '../getCocktails';
import { getCocktailById } from '../getCocktails';
import { getRandomCocktail } from '../getCocktails';
import { getIngrByName } from '../getCocktails';
import { renderDrinkMarkup } from '../markupTools';
import { nameCocktails } from '../Vitalik/favoriteCocktails';
import { arrIdIngridients } from '../Vitalik/favoriteIngridients';
import { load } from '../Vitalik/storage';

const formByLetter = document.querySelector('.letter-list-first');
const cocktList = document.querySelector('.cocktails__list');
const cocktModalRef = document.querySelector('.modal__cocktails');
const notFoundRef = document.querySelector('.not-found');
const letterListRef = document.querySelector('.letter-list');
const cocktSectRef = document.querySelector('.cocktails');

let btnLetterRef = [];
let letter = '';
let drinksList = [];
let drinksList2 = [];
let randomDrinks = [];
let cardsPerPageAfterResize = 0;
let cocktId = '';
let cardsPerPage = 9;
let ingrMarkup = '';
let ingrCardMarkup = '';
let cocktListLength = 0;

let btnLoadMarkup = '<button class="btnLoadM" type="button">Load more</button>';
cocktList.insertAdjacentHTML('afterend', btnLoadMarkup);
const btnLoadMoreRef = document.querySelector('.btnLoadM');

const str = 'abcdefghijklmnopqrstuvwxyz 1234567890';
let arr = str.split('');
let arrIngreds = load('ingridients');
let arrCocktls = load('cocktails');

// контроль ширины экрана

function widthControl() {
  if (window.innerWidth <= 768) {
    cardsPerPage = 3;
    formByLetter.classList.add('is-hidden');
  } else if (window.innerWidth > 768 && window.innerWidth <= 1280) {
    cardsPerPage = 6;
  }
  cardsPerPageAfterResize = cardsPerPage;

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
      formByLetter.classList.add('is-hidden');
      cardsPerPageAfterResize = 3;
    } else if (window.innerWidth > 768 && window.innerWidth <= 1280) {
      formByLetter.classList.remove('is-hidden');
      cardsPerPageAfterResize = 6;
    } else {
      cardsPerPageAfterResize = 9;
    }

    if (cardsPerPageAfterResize !== cardsPerPage) {
      cardsPerPage = cardsPerPageAfterResize;
      cocktList.innerHTML = '';
      randomDrinks = [];
      createRandomList();
    }
  });
}

widthControl();

function createLetterList(arr) {
  const markup = arr
    .map(element => {
      return `
            <li class="letter">
                <button class="btn-letter" type="button">
                ${element}
                </button>
            </li>`;
    })
    .join('');
  formByLetter.insertAdjacentHTML('beforeend', markup);
  letterListRef.insertAdjacentHTML('beforeend', markup);
  btnLetterRef = document.querySelectorAll('.btn-letter');
}

function createRandomList() {
  cocktList.innerHTML = '';

  for (let i = 1; i <= cardsPerPage; i += 1) {
    getRandomCocktail().then(data => {
      if (data.drinks !== null) {
        cocktListLength = data.drinks.length;
        randomDrinks.push(data.drinks[0]);
        const cardMarkup = renderDrinkMarkup(randomDrinks);
        cocktList.innerHTML = '';
        cocktList.insertAdjacentHTML('beforeend', cardMarkup);
      }
    });
  }
  const cardMarkup = renderDrinkMarkup(randomDrinks);
  cocktList.innerHTML = '';
  cocktList.insertAdjacentHTML('beforeend', cardMarkup);
}

createLetterList(arr);

createRandomList();

function fetch() {  

  if (letter !== '') {
    return getCocktailByLetter(letter).then(data => {
      if (data.drinks !== null) {
        cocktSectRef.classList.remove('visually-hidden');
        notFoundRef.classList.add('is-hidden');
        cocktListLength = data.drinks.length;
        if (cocktListLength > cardsPerPage) {
          console.log('btnLoadMore not hidden');
          btnLoadMoreRef.style.display = 'inline-flex';
          btnLoadMoreRef.addEventListener('click', paginator2)
            
        }
        drinksList = data.drinks;
        console.log('drinksListOOO', drinksList);

        paginator(drinksList)
          
      } else {
        markupAlert();
      }
    });
  }

  markupAlert();
}


function paginator(drinksList) {
  let arr1 = [];
  let counter1 = 0;
  
  arr1 = drinksList.splice(0, cardsPerPage);
  drinksList2 = drinksList;
  console.log('arr1', arr1);
  console.log('drinksList2 again', drinksList2);
  
  const cardMarkup = renderDrinkMarkup(arr1);
  cocktList.innerHTML = '';
  cocktList.insertAdjacentHTML('beforeend', cardMarkup);
  counter1 += 1;

  console.log('counter1', counter1);
  console.log('drinksList before SECOND pagination', drinksList);
}

function paginator2(counter1, arr1) {

if (counter1 !== 0) {
  console.log('counter1 BEFORE', counter1);
  console.log('STARTING secondary pagination');
  console.log('drinksList before SECOND pagination', drinksList2);
  if (drinksList2.length < cardsPerPage) {
          
          const cardMarkup = renderDrinkMarkup(drinksList);
          cocktList.insertAdjacentHTML('beforeend', cardMarkup);
          btnLoadMoreRef.style.display = 'none';
          console.log('Marked Up last page, hid the button');
          counter1 += 1;
        } else {
    
        arr1 = drinksList2.splice(0, cardsPerPage);
        const cardMarkup = renderDrinkMarkup(arr1);
    cocktList.insertAdjacentHTML('beforeend', cardMarkup);
    console.log('3rd variand done');
        counter1 += 1;

  }
  }
  }



function removeActive() {
  btnLetterRef.forEach(elem => {
    elem.classList.remove('button-active');
    console.log('removeActive');
  });
}

const handleClick = event => {
  
  removeActive();
  letter = event.target.textContent.trim().toLowerCase();
  event.target.classList.add('button-active');
  fetch();
};

function markupAlert() {
  cocktSectRef.classList.add('visually-hidden');
  notFoundRef.classList.remove('is-hidden');
}

letterListRef.addEventListener('click', handleClick);
formByLetter.addEventListener('click', handleClick);

// модалка

function modalSelector() {
  const refs = {
    openModalBtn: document.querySelector('.cocktails__list'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);

  document.querySelector('.back-drop').addEventListener('click', event => {
    if (
      event.target === event.currentTarget ||
      event.target === document.querySelector('.modal__button')
    ) {
      closeAuthModal();
    } else if (
      event.target.parentNode.parentNode ===
      document.querySelector('.cocktail-compound')
    ) {
      document
        .querySelector('.modal__ingredients')
        .parentNode.classList.remove('is-hidden');
      ingrModalOpen(event);
    }
  });
  function closeAuthModal() {
    document.querySelector('.back-drop').classList.add('is-hidden');
  }
}

modalSelector();

function toggleModal(event) {
  const modal = document.querySelector('[data-modal]');

  if (event.target.textContent !== 'Learn more') {
    return;
  }
  cocktId = event.target.parentNode.previousElementSibling.dataset.id;

  getCocktailById(cocktId).then(data => {
    if (data.drinks !== null) {
      cocktListLength = data.drinks.length;
      drinksList = data.drinks;

      let cocktObj = data.drinks[0];
      let ingrObj = {};
      let dozsObj = {};

      for (let key in cocktObj) {
        if (key.includes('strIngredient')) {
          if (cocktObj[key] !== null) {
            ingrObj[key] = cocktObj[key];
          }
        }
      }

      for (let key in cocktObj) {
        if (key.includes('strMeasure')) {
          if (cocktObj[key]) {
            dozsObj[key] = cocktObj[key];
          }
        }
      }

      for (let i = 0; i <= Object.keys(ingrObj).length - 1; i += 1) {
        ingrMarkup += `<li><a class="compound__elem" href="" data-ingredient="${
          Object.values(ingrObj)[i]
        }">${Object.values(dozsObj)[i]} ${Object.values(ingrObj)[i]}</a></li>
                    `;
      }
      renderModalCockt(drinksList);
    } else {
      markupAlert();
    }
  });
  modal.classList.toggle('is-hidden');
}

let renderBtn = '';
function renderModalCockt(drinksList) {
  const cocktMarkup = drinksList
    .map(({ idDrink, strInstructions, strDrinkThumb, strDrink }) => {
      if (arrCocktls.includes(idDrink) || nameCocktails.includes(idDrink)) {
        renderBtn = '<button class="btn-re-fav" type="button">Remove</button>';
      } else {
        renderBtn = '<button class="btn-add" type="button">Add to</button>';
      }

      return `
        <div class="modal__path">
          <div class="path__box">
            <h2 class="modal__heading">${strDrink}</h3>
            
              <h3 class="compound__title">Ingredients</h3>
              <p class="compound__text">Per cocktail</p>
            <ul class="cocktail-compound">
              ${ingrMarkup}
            </ul>
          </div>
          <img class="cocktails__foto" src="${strDrinkThumb}" alt="${strDrink}"/>
        </div>

        <h2 class="cocktails__instractions">Instructions:</h2>
        <p class="instractions-text" data-id="${idDrink}">
          ${strInstructions}
        </p>

        <div class="button-wrapper">
          ${renderBtn}
        </div>
    
        <button
          type="button"
          class="modal__button"
          data-modal-close
          aria-label="close"
        >X</button>
        `;
    })
    .join('');

  cocktModalRef.innerHTML = '';
  cocktModalRef.insertAdjacentHTML('beforeend', cocktMarkup);
  ingrMarkup = '';
  const ingrRef = document.querySelector('.cocktail-compound');
  ingrRef.addEventListener('click', ingrModalOpen);
}

// Вторая модалка

function ingrModalOpen(event) {
  event.preventDefault();
  const ingrName = event.target.dataset.ingredient;

  getIngrByName(ingrName).then(data => {
    const ingrData = data.ingredients;
    ingrCardMarkup = ingrData
      .map(({ idIngredient, strDescription, strType, strABV }) => {
        let ingrType = 'Non-specific';
        let ingrDescr = 'No description';
        let ingrAlcBV = '';
        let ingrStartDescr = '';

        if (strDescription !== null) {
          ingrStartDescr = strDescription.split(' ')[0];
          ingrDescr = strDescription.split(' ').slice(1).join(' ');
        }

        if (strType !== null) {
          ingrType = strType;
        }

        if (strABV !== null) {
          ingrAlcBV = `<li class="compound__elem">Alcohol by volume: ${strABV}</li>`;
        }

        if (
          arrIngreds.includes(idIngredient) ||
          arrIdIngridients.includes(idIngredient)
        ) {
          renderBtn =
            '<button class="btn-re-fav" type="button">Remove</button>';
        } else {
          renderBtn =
            '<button class="btn-add-fav" type="button">Add to</button>';
        }

        return `
        <div class="modal__title">
            <h2 class="modal__heading">${ingrName}</h2>
            <h3 class="ingredient__title">${ingrType}</h3>
        </div>
        <p class="ingredien__text">
          <span class="ingredien__text--bald">${ingrStartDescr}</span> ${ingrDescr}
        </p>
    
        <ul class="ingredient__compound">
          <li class="compound__elem"><span class="star">✶</span>Type: ${ingrType}</li>
           <span class="star">✶</span>${ingrAlcBV}
        </ul>
    
        <div class="button-wrapper" data-ingr="${idIngredient}">
          ${renderBtn}
        </div>
    
        <button
          type="button"
          class="modal__button2"
          data-modal-close
          aria-label="close"
        >X</button>
            `;
      })
      .join('');

    const ingrModalRef = document.querySelector('.modal__ingredients');
    ingrModalRef.innerHTML = '';
    ingrModalRef.insertAdjacentHTML('beforeend', ingrCardMarkup);
    ingrCardMarkup = '';
    cocktModalRef.addEventListener('click', ingrModalOpen);
    document
      .querySelector('.modal__ingredients')
      .parentNode.addEventListener('click', e => {
        if (
          e.target ===
            document.querySelector('.modal__ingredients').parentNode ||
          event.target === document.querySelector('.modal__button')
        ) {
          closeAuthModal();
        }
      });

    document
      .querySelector('.modal__button2')
      .addEventListener('click', closeAuthModal);

    document
      .querySelector('.modal__button')
      .addEventListener('click', closeAuthModal);

    function closeAuthModal() {
      document
        .querySelector('.modal__ingredients')
        .parentNode.classList.add('is-hidden');
    }
  });
}
