import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {removeContact} from '../../redux';

import _ from '../../../node_modules/lodash';

import './contact.css';

export default function Contact() {
    const initialState = useSelector(state => [...state]);
    const dispatch = useDispatch();

    return (
        <div className='contact-card-container'>
            {_.map(initialState, contact => (
                <div className='contact' key={contact._id}>
                    <h1>{contact.firstName} {contact.lastName}</h1>
                    <h4>Age: {contact.age}</h4>
                    <button onClick={() => dispatch(removeContact(contact._id))}>Remove</button>
                </div>
            ))}
        </div>
    );
}



