// const redux = require('redux');
import redux, {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import uuid from 'react-uuid';


// ----------------------------------------- Setting The Initial State
const initialState = [
    {_id: uuid(), firstName: 'Homes', lastName: 'Jones', age: 26},
    {_id: uuid(), firstName: 'Jordan', lastName: 'Mike', age: 45}
];
// ----------------------------------------- Action To Add New Contact
export const addNewContact = (card) => {

    return (dispatch) => {
        dispatch({type: 'ADD_NEW_CONTACT', payload: card});    
    }
}
// ----------------------------------------- Action To Remove Contact
export const removeContact = (_id) => {
    return (dispatch) => {
        dispatch({type: 'REMOVE_CONTACT', payload: _id})
    }
};
// ------------------------------------------------- Reducer
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_NEW_CONTACT':
            return [ ...state, action.payload ];
        case 'REMOVE_CONTACT': 
            const updatedContacts = state.filter(contact => contact._id !== action.payload);
            return updatedContacts;
        default: 
            return state;
    }
}
// ------------------------------------------------ Creating Redux Store
const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()))

export default store;
