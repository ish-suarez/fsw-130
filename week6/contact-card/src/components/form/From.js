import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addNewContact} from '../../redux';
import uuid from 'react-uuid';

import './form.css';

export default function Form() {
    const dispatch = useDispatch();

    const inputs = {
        _id: uuid(),
        firstName: '',
        lastName: '',
        age: null
    }

    const [input, setInput] = useState(inputs);
    const [toggle, setToggle] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInput(prevInput => ({...prevInput, [name]: value}));
    } 

    const formSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewContact(input));
        setInput(inputs);
    }

    return (
        <div className='form-container'>
            {!toggle ? 
                <h1 className='add-button' onClick={() => setToggle(true)}>Add New Contact</h1>
            :
                <div className='form-container'>
                    <form onSubmit={formSubmit}>
                        <h3>Enter Contacts Information</h3>
                        <input name='firstName' type='text' value={input.firstName} onChange={handleChange}  placeholder='First Name' required />
                        <input name='lastName' type='text' value={input.lastName} onChange={handleChange}  placeholder='Last Name' required />
                        <input name='age' type='number' value={input.age} min='10' max='100' onChange={handleChange} placeholder='Age' required />
                        <button>Add New Contact</button>
                    </form>
                    <button className='done-button' onClick={() => setToggle(false)}>Done</button>
                </div>
            }
        </div>
    );
}