export const fetchMovies = async (page) => {

    const limit = 10;
    const url = `https://api.trakt.tv/movies/trending?page=${page}&limit=${limit}`

    const response = await fetch(url, { 
      method: 'get', 
      headers: new Headers({
        'Content-type': 'application/json',
        'trakt-api-key': 'e43894ad925df532a75ef1ec655ce2e97e5d30511e02fb9ca1909ba484ede772',
        'trakt-api-version': '2'
      })
    });

    const movies = await response.json();
  
    return movies;

};