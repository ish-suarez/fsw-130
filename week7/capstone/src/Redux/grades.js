import uuid from 'react-uuid';

import _ from 'lodash';

// ---------------------------------- Setting Initial State For TV Shows
const initialShows = [ 
    {_id: uuid(), class: 'fsw-130', grade: 'C'},
    {_id: uuid(), class: 'fsw-125', grade: 'F'},
    {_id: uuid(), class: 'fsw-120', grade: 'A'},
    {_id: uuid(), class: 'fsw-115', grade: 'B'}

]

export const getGrades = () => {
    return {
        type: 'GET_GRADES'
    }
}

export const addClass = grade => {
    return (dispatch) => {
        dispatch({type: 'ADD_CLASS', data: grade});
    }
}

export const removeGrade = (_id) => {
    return (dispatch) => {
        dispatch({type: 'REMOVE_GRADE', data: _id});
    }
}

// ------------------------------------------------------------------- Setting Initial StateSetting Initial State
export default function gradesReducer(classes = initialShows, action) {
    switch(action.type) {
        case 'ADD_CLASS':
            return [action.data, ...classes]
            break;
        case 'REMOVE_GRADE':  
            const updatedArr = classes.filter(course => course.grade !== action.data);
            return updatedArr;
            break;
        case 'GET_GRADES': 
            return classes;
            break;
        default:
            return classes;
    }
}
