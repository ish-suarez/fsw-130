import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import profileReducer from './profile';
import gradesReducer from './grades';

const rootReducer = combineReducers({
    profileReducer,
    gradesReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));

// ------------------------------------- Exporting Store
export default store;
