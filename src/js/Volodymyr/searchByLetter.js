
import { getCocktailByLetter } from '../getCocktails';
import { getCocktailByName } from '../getCocktails'; 
import { getRandomCocktail } from '../getCocktails';
import { getCocktailById } from '../getCocktails';

const InfiniteScroll = require('infinite-scroll');

const formByLetter = document.querySelector('p');
const cocktList = document.querySelector('.cocktails__list');
const cocktModalRef = document.querySelector('.modal__cocktails');


let btnLetterRef = [];
let letter = '';
let drinksList = [];
let randomDrinks = [];
let cardsPerPageAfterResize = 0;
let cocktName = '';
let cardsPerPage = 9;


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
    console.log('randomDrinks', randomDrinks);
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
                console.log('data.drinks', data.drinks);
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
    console.log('You pressed on button :', letter);
    console.log('event.target', event.target);
    event.target.classList.add("button-active")
    fetch();
});


function renderCardsList (drinksList) {
    const cardMarkup = drinksList.map(({ strDrinkThumb, strDrink }) => {   
    console.log('I am working!!');
    return `
        <li>
            <div>
              <img src="${strDrinkThumb}" alt="${strDrink}" width="280">
            </div>
            <p>${strDrink}</p>
            <button class="btn-lm" type="button">Learn more</button>
            <button class="btn-add" type="button">Add to</button>
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

      console.log('openModalBtn', refs.openModalBtn);

      console.log('opening mod');

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

};


function toggleModal(event) {
    const modal = document.querySelector("[data-modal]");

    if (event.target.textContent !== 'Learn more') {
        return
    }
    console.log('Connection done');
    console.log('opening modal');
    cocktName = event.target.previousElementSibling.textContent.trim();
    console.log('cocktName', cocktName);
    ;
    getCocktailByName(cocktName)
        .then(data => {
            if (data.drinks !== null) {
                cocktListLength = data.drinks.length;
                drinksList = data.drinks;
                console.log('data.drinks', data.drinks);
                console.log('ready-to-markup');
                renderModalCockt(drinksList);
            } else {
                markupAlert();
            }
        })
    modal.classList.toggle("is-hidden");
};


function renderModalCockt(drinksList) {
    const cocktMarkup = drinksList.map(({ idDrink, strAlcoholic, strInstructions, strDrinkThumb, strDrink }) => {   

    getCocktailById(idDrink).then(data => {
            if (data.drinks !== null) {
                
                let cocktObj = data.drinks[0];
                let ingrObj = {};
                let dozsObj = {};

                for (let key in cocktObj) {
                    if (key.includes('strIngredient')) {
                        if (cocktObj[key]) {
                            console.log('Add cocktObj[key]', cocktObj[key]);
                            ingrObj[key] = cocktObj[key]
                        } 
                    }
                }
                console.log('ingrObj', ingrObj);

                for (let key in cocktObj) {
                    if (key.includes('strMeasure')) {
                        if (cocktObj[key]) {
                            console.log('Add cocktObj[key]', cocktObj[key]);
                            dozsObj[key] = cocktObj[key]
                        } 
                    }
                }
                console.log('dozsObj', dozsObj);

                } else {
                markupAlert();
            }
    })
        
        return `
        <h2 class="modal__heading">${strDrink}</h2>
        <img src="${strDrinkThumb}" alt="${strDrink}">
        <ul>
          <h3>Ingredients</h3>
          <li><a href="">Ice</a></li>
          <li><a href="">1 ounce gin</a></li>
          <li><a href="">1 ounce Campari</a></li>
          <li><a href="">1 ounce sweet vermouth</a></li>
          <li><a href="">Garnish: orange peel</a></li>
        </ul>
    
        <h3>Instractions:</h3>
        <p>
          Add the gin, Campari and sweet vermouth to a mixing glass filled with ice,
          and stir until well-chilled. Strain into a rocks glass filled with large
          ice cubes. Garnish with an orange peel.
        </p>

        <button class="btn-add-fav" type="button">Add to favorite</button>
        <button class="btn-re-fav" type="button">Remove from favorite</button>
    
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
}

modalSelector();