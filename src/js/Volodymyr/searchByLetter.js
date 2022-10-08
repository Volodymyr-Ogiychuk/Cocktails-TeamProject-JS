

const formByLetter = document.querySelector('p');

let letter = '';
let cocktListLength = 0;

const str = 'abcdefghijklmnopqrstuvwxyz 1234567890';
let arr = str.split("");

const addList = '<ul class="letter-list"></ul>';

formByLetter.insertAdjacentHTML('beforeend', addList);

const letterListRef = document.querySelector('.letter-list');

function createLetterList(arr) {

const markup = arr.map(element => {
    return `
         <li class="letter">
            <button class button type="button">
            ${element}
            </button>
        </li>`;
               
    })
        .join('');


letterListRef.insertAdjacentHTML('beforeend', markup);
       
};

function fetch() {
    return fetchCockt(letter).then(data => {

        console.log('Data : ', data);
        console.log('Data length: ', data.drinks.length);
        cocktListLength = data.drinks.length;

            
        // totalPages = Math.ceil(data.total / 40);
            
        // if (cocktListLength > 0) {
            
        //     if (pageNumber === 1) {
                
        //         Notify.success(`Hooray! We found ${data.totalHits} images.`);
        //         }
                
        //         const arr = data.hits;
        //         createImgList(arr);

        //         if (pageNumber < totalPages) {
        //             refs.btnLoad.style.display = 'block';
        //             pageNumber += 1;
                    
        //         } 

        //     } else if (data.total === 0) {
        //         Notify.failure('Sorry, there are no images matching your search query. Please try again.')
        //     }
                 
        })
}

createLetterList(arr);

const handleClick = (event => {
    letter = event.target.textContent.trim().toLowerCase();
    console.log('You pressed on button :', letter);
    fetch();
    
});

letterListRef.addEventListener('click', handleClick);








import axios from 'axios';

const API_KEY = '1';
const BASE_URL = `https://www.thecocktaildb.com/api/json/v1/`;


// const options = {
//   params: {
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: 'true',
//     per_page: '40'
//   },
// };

const fetchCockt = async (letter) =>
    await axios.get(`${BASE_URL}${API_KEY}/search.php?f=${letter}`)
    .then(response => {
      return response.data;
    })
    .catch(error => console.log(error.message));