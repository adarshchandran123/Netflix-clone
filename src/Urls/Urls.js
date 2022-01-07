import {API_KEY} from '../constants/Constants'
export const Originals =`discover/tv?api_key=${API_KEY}&with_networks=213`
export const Action_movie = `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate`
export const Animation_movie =`discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&api_key=${API_KEY}&with_genres=16`