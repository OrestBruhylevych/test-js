import './css/styles.css';
const axios = require('axios');



import SearchServis from './js/servise-film-sorch-word';

const searchServis = new SearchServis;

document.querySelector('.form').addEventListener('submit', getFilm);


async function getFilm(e) {
    e.preventDefault();

    let inputValue = e.currentTarget.elements.searchQuery.value;

    searchServis.query = inputValue;
    
    const a = await searchServis.getFilm();

    console.log(a);
    console.log('hello');

    a.map(a => console.log(a.poster_path));

    
    const marcup = cardRenderMurcup(a);

    console.log(marcup);

    document.querySelector('.container').insertAdjacentHTML('beforebegin', marcup);

    
};

function  cardRenderMurcup(cards) {
    return cards.map(({ poster_path }) => {
        if (poster_path === null) {
            poster_path = '/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg';
        }

        return `<div class="gallery__item">
                <a class="gallery__link" 
                   href="">
                <img
                    class="gallery__image"
                    src="https://image.tmdb.org/t/p/original${poster_path}"
                    data-source=""
                    alt=""  
                    width='340'                   
                    />
                </a>
            </div>`
    }).join('');
}


    
      
    
 

