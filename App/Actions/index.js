import axios from 'axios';

const BASE_URL = 'https://api.trakt.tv';

const LIMIT = 20;

export const ADD_MOVIES = 'ADD_MOVIES';
export const addMovies = async (obj) => {
    
    const url = `${BASE_URL}/movies/trending?page=${obj.page}&limit=${LIMIT}`;

    var config = {
        headers: {
            'Content-type': 'application/json',
            'trakt-api-key': 'e43894ad925df532a75ef1ec655ce2e97e5d30511e02fb9ca1909ba484ede772',
            'trakt-api-version': '2'
        }
    };
    
    const request = axios.get(url, config);
    
    return {
        type: ADD_MOVIES,
        payload: request
    }
}

export const SEARCH_MOVIES = 'SEARCH_MOVIES';
export const searchMovie = (searchName) => {

    const url = `${BASE_URL}/search/movie?query=${searchName}`;
    
    var config = {
        headers: {
            'Content-type': 'application/json',
            'trakt-api-key': 'e43894ad925df532a75ef1ec655ce2e97e5d30511e02fb9ca1909ba484ede772',
            'trakt-api-version': '2'
        }
    };
    
    const request = axios.get(url, config);
    
    return {
        type: SEARCH_MOVIES,
        payload: request
    }
}
