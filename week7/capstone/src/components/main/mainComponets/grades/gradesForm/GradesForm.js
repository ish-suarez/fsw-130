import React, {useState} from 'react';
import uuid from 'react-uuid';

import './gradeForm.css';

import {useDispatch} from 'react-redux';
import { addClass } from '../../../../../Redux/grades';

export default function Form() {
    const dispatch = useDispatch();
    const formInput = [{ class: '', grade: ''}];

    const [inputs, setInput] = useState(formInput);
    
    const handleChange = (e) => {
    const {name, value} = e.target;
    setInput(prevInput => ({...prevInput, [name]: value}));
}

const formSubmit = (e) => {
    e.preventDefault();
    dispatch(addClass(inputs));
    setInput(formInput);
}
    return (
        <form onSubmit={formSubmit}>
            <input name='class' type='text' value={inputs.class} onChange={handleChange} placeholder='Class' Required />
            <input name='grade' type='text' value={inputs.grade} onChange={handleChange} placeholder='Grade' required />
            <button>Add Class</button>
        </form>
    );
}