// ------------------------------------- Allows Import Statement To Be Used
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// ------------------------------------- Importing Redux, comvineReducers and createStore
const redux = require('redux');
const {combineReducers, createStore} = redux;

// ------------------------------------- Importing Movie and TV Shows To Be Used
import moviesReducer from './movies.js';
import tvShowsReducer from './tvShows.js';

// ------------------------------------ Setting Root Reducers
const rootReducer = combineReducers({
    movies: moviesReducer,
    tvShows: tvShowsReducer
})

// ------------------------------------ Creating Store
const store = createStore(rootReducer)
store.subscribe(() => {
    console.log(store.getState())
})

// ------------------------------------- Exporting Store
export default store;