import {API_KEY} from './Constants/Constants'
export const originals = `discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`;
export const action = `discover/movie?api_key=${API_KEY}&with_genres=28`;
export const upcoming = `movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
export const toprated = `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;