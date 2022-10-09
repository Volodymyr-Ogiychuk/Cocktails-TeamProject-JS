
import { getCocktailByLetter } from '../getCocktails'

const formByLetter = document.querySelector('p');
const cocktList = document.querySelector('.cocktails__list');


let btnLetterRef = [];
let letter = '';
let cocktListLength = 0;
let drinksList = [];

const str = 'abcdefghijklmnopqrstuvwxyz 1234567890';
let arr = str.split("");

// временная разметка

const addList = '<ul class="letter-list"></ul>';
formByLetter.insertAdjacentHTML('afterend', addList);
const letterListRef = document.querySelector('.letter-list');



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


createLetterList(arr);


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
    console.log('You pressed on button :', letter);
    console.log('event.target', event.target);
    event.target.classList.add("button-active")
    fetch();
});


const renderCardsList = (drinksList) => {
    const cardMarkup = drinksList.map(({ strDrinkThumb, strDrink }) => {   
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
