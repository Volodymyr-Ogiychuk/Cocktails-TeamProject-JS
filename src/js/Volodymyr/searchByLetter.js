
import { getCocktailByLetter } from '../getCocktails';
import { getCocktailById } from '../getCocktails'; 
import { getRandomCocktail } from '../getCocktails';
import { getIngrByName } from '../getCocktails';
import { renderDrinkMarkup } from '../markupTools';

// const InfiniteScroll = require('infinite-scroll');

const formByLetter = document.querySelector('.letter-list-first');
const cocktList = document.querySelector('.cocktails__list');
const cocktModalRef = document.querySelector('.modal__cocktails');
const notFoundRef = document.querySelector('.is-hidden');
const letterListRef = document.querySelector('.letter-list');
const cocktSectRef = document.querySelector('.cocktails');

let btnLetterRef = [];
let letter = '';
let drinksList = [];
let randomDrinks = [];
let cardsPerPageAfterResize = 0;
let cocktId = '';
let cardsPerPage = 9;
let ingrMarkup = '';
let ingrCardMarkup = '';
let cocktListLength = 0;

const str = 'abcdefghijklmnopqrstuvwxyz 1234567890';
let arr = str.split("");

// контроль ширины экрана

function widthControl() {
    if (window.innerWidth <= 768) {
        cardsPerPage = 3;
    } else  if (window.innerWidth > 768 && window.innerWidth <= 1280) {
        cardsPerPage = 6;
    }
    cardsPerPageAfterResize = cardsPerPage;

    
    window.addEventListener('resize', () => {
        
        if (window.innerWidth <= 768) {
            cardsPerPageAfterResize = 3;
    } else  if (window.innerWidth > 768 && window.innerWidth <= 1280) {
            cardsPerPageAfterResize = 6;
    } else {
            cardsPerPageAfterResize = 9;
        };
        
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
    const markup = arr.map(element => {
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
       
};

function createRandomList() {
    
    cocktList.innerHTML = '';
    
        for (let i = 1; i <= cardsPerPage; i += 1) {
            getRandomCocktail()
            .then(data => {
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
};

createLetterList(arr);

createRandomList();

function fetch() {
    if (letter !== '') {
        return getCocktailByLetter(letter)
            .then(data => {
                if (data.drinks !== null) {   
                    cocktSectRef.classList.remove('visually-hidden');
                    notFoundRef.classList.add('not-found');
                cocktListLength = data.drinks.length;
                drinksList = data.drinks;
                const cardMarkup = renderDrinkMarkup(drinksList);
                cocktList.innerHTML = '';
                cocktList.insertAdjacentHTML('beforeend', cardMarkup);
            } else {
                markupAlert();
                }
        })
    }
    markupAlert();    
};

function removeActive() {
    btnLetterRef.forEach(elem => {
    elem.classList.remove("button-active");
    })
};
          
            
const handleClick = (event => {
    removeActive();
    letter = event.target.textContent.trim().toLowerCase();
    event.target.classList.add("button-active")
    fetch();
});

function markupAlert() {
    // cocktList.innerHTML = ''
    cocktSectRef.classList.add('visually-hidden')
    notFoundRef.classList.remove('not-found');

    // cocktList.innerHTML = ''
    // cocktList.previousElementSibling.innerHTML = '';
    
   
    // cocktList.previousElementSibling.insertAdjacentHTML('beforeend', `
        
    //     <h2 class="not-found__title">Sorry, we didn't find any cocktail for you</h2>
    //     <div class="container">
    //         <div class="images">
    //             <img src="./image/photo.png" alt="">
    //         </div>
    //     </div>
    // `);
};

letterListRef.addEventListener('click', handleClick);
formByLetter.addEventListener('click', handleClick);

// модалка

function modalSelector() {
    const refs = {
      openModalBtn: document.querySelector(".cocktails__list"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", () => {
        modal.classList.toggle("is-hidden");
    });
};

function toggleModal(event) {
    const modal = document.querySelector("[data-modal]");
    console.log('event.target', event.target);
    console.log('event.target.previousElementSibling', event.target.parentNode.previousElementSibling);
    if (event.target.textContent !== 'Learn more') {
        return
    }
    cocktId = event.target.parentNode.previousElementSibling.dataset.id;
    
    getCocktailById(cocktId)
        .then(data => {
            if (data.drinks !== null) {
                cocktListLength = data.drinks.length;
                drinksList = data.drinks;
                
                let cocktObj = data.drinks[0];
                let ingrObj = {};
                let dozsObj = {};

                for (let key in cocktObj) {
                    if (key.includes('strIngredient')) {
                        if (cocktObj[key] !== null) {
                            ingrObj[key] = cocktObj[key]
                        } 
                    }
                }

                for (let key in cocktObj) {
                    if (key.includes('strMeasure')) {
                        if (cocktObj[key]) {
                            dozsObj[key] = cocktObj[key]
                        } 
                    }
                }
    
                for (i = 0; i <= Object.keys(ingrObj).length - 1; i += 1) {
                    ingrMarkup += `<li><a href="" data-ingredient="${Object.values(ingrObj)[i]}">${Object.values(dozsObj)[i]} ${Object.values(ingrObj)[i]}</a></li>
                    `}

                renderModalCockt(drinksList);

            } else {
                markupAlert();
            }
        })
    modal.classList.toggle("is-hidden");
};

function renderModalCockt(drinksList) {
    
    const cocktMarkup = drinksList.map(({ idDrink, strAlcoholic, strInstructions, strDrinkThumb, strDrink }) => {
    
        return `
        <img src="${strDrinkThumb}" alt="${strDrink}" width=450px>
        <h2 class="modal__heading">${strDrink}</h2>
        
        <h3 class="compound__title">Ingredients</h3>
        <p class="compound__text">Per coctail</p>
         <ul class="cocktail-compound">
          ${ingrMarkup}
        </ul>
        <h3 class="cocktails__instractions">Instructions:</h3>
        <p class="instractions-text" data-cockt-id="${idDrink}">
          ${strInstructions}
        </p>

        <div class="button-wrapper">
          <button class="btn-add-fav" type="button">Add to favorite</button>
          <button class="btn-re-fav" type="button">Remove from favorite</button>
        </div>
    
        <button
          type="button"
          class="modal__button"
          data-modal-close
          aria-label="close"
        >
          <svg class="modal__icon" width="25" height="25">
            <use href="./image/symbol-defs.svg#icon-close-line"></use>
          </svg>
        </button>
        `;           
    })
        .join('');
    
    cocktModalRef.innerHTML = '';   
    cocktModalRef.insertAdjacentHTML('beforeend', cocktMarkup);
    ingrMarkup = '';
    const ingrRef = document.querySelector('.modal__cocktails');
    ingrRef.addEventListener('click', ingrModalOpen)
}

// Вторая модалка

function ingrModalOpen(event) {
    event.preventDefault();
    const modal = document.querySelector(".modal__cocktails");
    const ingrName = event.target.dataset.ingredient;
   

    getIngrByName(ingrName).then(data => {
       
        const ingrData = data.ingredients;
        ingrCardMarkup = ingrData.map(({ idIngredient, strDescription, strType, strABV }) => {
            
            console.log('ingrData', ingrData);
            let ingrType = 'Non-specific';
            let ingrDescr = 'No description';
            let ingrAlcBV = '';
            let ingrStartDescr = '';

            if (strDescription !== null) {
                ingrStartDescr = strDescription.split(" ")[0];
                ingrDescr = strDescription.split(" ").slice(1).join(" ");                
            };
            
            if (strType !== null) {
                ingrType = strType;   
            };
            
            if (strABV !== null) {
                ingrAlcBV = `<li class="compound__elem">Alcohol by volume: ${strABV}</li>`;
            }
          
            //  проверка на наличие в Favorites
        
        return `
            <h2 class="modal__heading">${ingrName}</h2>
    
        <h3>${ingrType}</h3>
        <p>
          <span>${ingrStartDescr}</span> ${ingrDescr}
        </p>
    
        <ul class="ingredient__compound">
          <li class="compound__elem">Type: ${ingrType}</li>
           ${ingrAlcBV}
        </ul>
    
        <div class="button-wrapper" data-ingr="${idIngredient}">
          <button class="btn-add-fav" type="button">Add to favorite</button>
          <button class="btn-re-fav" type="button">Remove from favorite</button>
        </div>
    
        <button
          type="button"
          class="modal__button"
          data-modal-close
          aria-label="close"
        >
          <svg class="modal__icon" width="25" height="25">
            <use href="./image/symbol-defs.svg#icon-close-line"></use>
          </svg>
        </button>
            `;

        }).join('');

        const ingrModalRef = document.querySelector('.modal__ingredients');
        ingrModalRef.innerHTML = '';
        ingrModalRef.insertAdjacentHTML('beforeend', ingrCardMarkup);
        ingrCardMarkup = '';
        cocktModalRef.addEventListener('click', ingrModalOpen);
    });

};
    
modalSelector();

