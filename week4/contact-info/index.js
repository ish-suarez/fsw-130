const redux = require('redux');
// ----------------------------------------- Setting The Initial State
const initialState = [
    {firstName: 'Homes', lastName: 'Jones', age: 26},
    {firstName: 'Jordan', lastName: 'Mike', age: 26}
];
// ----------------------------------------- Action To Add New Contact
const addNewContact = (card) => {
    return {
        type: 'ADD_NEW_CONTACT',
        payload: card
    }
};
// ----------------------------------------- Action To Remove Contact
const removeContact = (firstName) => {
    return {
        type: 'REMOVE_CONTACT',
        payload: firstName
    }
};
// ------------------------------------------------- Reducer
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_NEW_CONTACT':
            return [ ...state, action.payload ];
        case 'REMOVE_CONTACT': 
            const updatedContacts = state.filter(contact => {
                if(contact.firstName != action.payload) {
                    return contact
                }
            });
            return updatedContacts;
        default: 
            return state;
    }
}
// ------------------------------------------------ Creating Redux Store
const store = redux.createStore(reducer);
store.subscribe(() => {
    console.log(store.getState());
})
// ------------------------------------------------ Dispatching A New Contact
store.dispatch(addNewContact({firstName: 'Izzy', lastName: 'Suarez', age: 23}));
// ------------------------------------------------ Dispatching The Removal Of One Contact
store.dispatch(removeContact('Jordan'));