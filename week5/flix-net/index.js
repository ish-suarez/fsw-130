// ------------------------------------ Importing Redux Store
import store from './redux/store.js';

// ------------------------------------ Importing Pure Functions From Movies and Tv Shows
import { addMovie, removeMovie, getAllMovies } from './redux/movies.js';
import { addTvShow, removeTvShow, getAllTvShows } from './redux/tvShows.js';

// --------------------------------------------------- Movie Dispatches
// ----------------------------------- Getting All Movies
store.dispatch(getAllMovies());

// ----------------------------------- Adding One Movie
store.dispatch(addMovie('Iron Man'));

// ----------------------------------- Removing One Movie
store.dispatch(removeMovie('Fast and Furious'))

// -------------------------------------------------- TV Show Dispatches
// ----------------------------------- Getting All TV Shows
store.dispatch(getAllTvShows());

// ----------------------------------- Adding One TV Show
store.dispatch(addTvShow('Lost'))

// ----------------------------------- Remove One TV Show
store.dispatch(removeTvShow('Dexter'));

