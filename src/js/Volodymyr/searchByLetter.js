
import { getCocktailByLetter } from '../getCocktails';
import { getCocktailById } from '../getCocktails'; 
import { getRandomCocktail } from '../getCocktails';
import { getIngrByName } from '../getCocktails';

// const InfiniteScroll = require('infinite-scroll');

const formByLetter = document.querySelector('p');
const cocktList = document.querySelector('.cocktails__list');
const cocktModalRef = document.querySelector('.modal__cocktails');

let btnLetterRef = [];
let letter = '';
let drinksList = [];
let randomDrinks = [];
let cardsPerPageAfterResize = 0;
let cocktId = '';
let cardsPerPage = 9;
let ingrMarkup = '';
let ingrCardMarkup = '';
let ingrBtnAddRemove = '';

const str = 'abcdefghijklmnopqrstuvwxyz 1234567890';
let arr = str.split("");

// временная разметка

const addList = '<ul class="letter-list"></ul>';
formByLetter.insertAdjacentHTML('afterend', addList);
const letterListRef = document.querySelector('.letter-list');

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
                    renderCardsList(randomDrinks);
                } 
            });     
    }
    renderCardsList(randomDrinks);
};

createLetterList(arr);

createRandomList();

function fetch() {
    if (letter !== '') {
        return getCocktailByLetter(letter)
            .then(data => {
            if (data.drinks !== null) {    
                cocktListLength = data.drinks.length;
                drinksList = data.drinks;
                renderCardsList(drinksList);
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

function renderCardsList (drinksList) {
    const cardMarkup = drinksList.map(({ idDrink, strDrinkThumb, strDrink }) => {
        
    return `
        <li>
            <div>
              <img src="${strDrinkThumb}" alt="${strDrink}" width="280">
            </div>
            <p data-id="${idDrink}">${strDrink}</p>
            <button class="btn-lm" type="button">Learn more</button>
            ${ingrBtnAddRemove}
        </li>`;           
    })
        .join('');
cocktList.innerHTML = '';   
cocktList.insertAdjacentHTML('beforeend', cardMarkup);

};

function markupAlert() {
    cocktList.innerHTML = ''; 
    console.log(`Sorry, we didn't find any cocktail for you`);
    cocktList.insertAdjacentHTML('beforeend', `
        <div class="alert">
        <p>Sorry, we didn't find any cocktail for you</p>
        <img src="./images/frame.jpg" alt="Picture sorry">
        </div>
    `);
};

letterListRef.addEventListener('click', handleClick);

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

    if (event.target.textContent !== 'Learn more') {
        return
    }
    cocktId = event.target.previousElementSibling.dataset.id;
    
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
        <h2 class="modal__heading">${strDrink}</h2>
        <img src="${strDrinkThumb}" alt="${strDrink}" width=450px>
        <h3>Ingredients</h3>
        <p>Per coctail</p>
        <ul>
          ${ingrMarkup}
        </ul>
    
        <h3>Instruction:</h3>
        <p>
          ${strInstructions}
        </p>

        ${ingrBtnAddRemove}
    
        <button
          type="button"
          class="modal__button"
          data-modal-close
          aria-label="close"
        >
          <svg class="modal__icon" width="32" height="32">
            <!-- <use href=""></use> -->
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
        ingrCardMarkup = ingrData.map(({ strIngredient, strDescription, strType, strAlcohol, strABV }) => {
            
            
            let ingrType = 'Non-specific';
            let ingrDescr = 'No description';
            let ingrAlcBV = '';
            let ingrStartDescr = '';
            let ingrBtnAddRemove = '';

            if (strDescription !== null) {
                ingrStartDescr = strDescription.split(" ")[0];
                ingrDescr = strDescription.split(" ").slice(1).join(" ");                
            };
            
            if (strType !== null) {
                ingrType = strType;
                
            };
            
            if (strABV !== null) {
                ingrAlcBV = `<li>Alcohol by volume: ${strABV}</li>`;
            }
          
            //  проверка на наличие в Favorites
        
        return `
            <h2 class="modal__heading">${ingrName}</h2>
    
        <h3>${ingrType}</h3>
        <p>
          <span>${ingrStartDescr}</span> ${ingrDescr}
        </p>
    
        <ul>
          <li>Type: ${ingrType}</li>
           ${ingrAlcBV}
        </ul>
    
        <button type="button">${ingrBtnAddRemove}</button>
    
        <button
          type="button"
          class="modal__button"
          data-modal-close
          aria-label="close"
        >
          <svg class="modal__icon" width="32" height="32">
            <!-- <use href=""></use> -->
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

