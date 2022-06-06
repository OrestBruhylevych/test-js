


const axios = require('axios');
const URL = 'https://api.themoviedb.org/3/search/movie';
const KEY = 'c8ef48bae82b60cf66a4f0e6e3dd153e';


export default class SearchServis {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    async getFilm() {

        const url = `${URL}?api_key=${KEY}&language=en-US&query=${this.searchQuery}&page=${this.page}&include_adult=false`;

        try {
            const response = await axios.get(url);
            const array = response.data.results;
            this.page += 1;
            
            return array;
        ;
        
        } catch (error) {
            console.error(error);
        }
    };

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query (newSearchQuery) {
        this.searchQuery = newSearchQuery;
    }

}