// ------------------------------------- Allows Import Statement To Be Used
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// ------------------------------------- Importing Redux, combineReducers and createStore
const redux = require('redux');
const {combineReducers, createStore} = redux;

// ------------------------------------- Importing Movie and TV Shows To Be Used
// const moviesReducer = requrie('./movies');
// const tvShowsReducer = requrie('./tvShows');
import moviesReducer from './movies.js';
import tvShowsReducer from './tvShows.js';

// ------------------------------------ Setting Root Reducers
const rootReducer = combineReducers({
    moviesReducer,
    tvShowsReducer
})

// ------------------------------------ Creating Store
export const store = createStore(rootReducer)
store.subscribe(() => {
    console.log(store.getState())
})

// ------------------------------------- Exporting Store
export default store;