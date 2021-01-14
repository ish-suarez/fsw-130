import uuid from 'react-uuid';

// ---------------------------------- Setting Initial State For profile
const initialState = [
    {_id: uuid(), name: 'Hector Suarez', picture: 'https://ca.slack-edge.com/TKMTW1R1C-U014N88LX60-837d52b68633-512', schoolName: 'BryanUniv', url: ''}
]    

//---------------------------------- Adding A Movie  
export const addUrl = (url) => {
    return (dispatch) => {
        dispatch({type: 'ADD_URL', data: url});
    }
}

//---------------------------------- Removing Movie
export const removePost = (_id) => {
    return (dispatch) => {
        dispatch({type: 'REMOVE_POST', data: _id});
    }
}

// ---------------------------------- Getting All profile
export const getProfile = () => {
    return {
        type: 'GET_PROFILE'
    }
}

// ---------------------------------------------------------------------- Movie Reducer
export default function profileReducer(profile = initialState, action) {
    switch(action.type) {
        case 'ADD_URL':
            return [...profile, action.data]
            break;
        case 'REMOVE_POST':             
            const updatedArr = profile.filter(profile => profile._id !== action.data);
            return updatedArr;
            break;
        case 'GET_PROFILE':
            return profile;
            break;
        default:
            return profile;
    }
}
