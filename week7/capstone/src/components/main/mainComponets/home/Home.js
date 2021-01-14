import React from 'react';
import _ from '../../../../../node_modules/lodash'

import {useSelector} from 'react-redux';

import './home.css';

export default function Home() {
    const user = useSelector(profile => profile.profileReducer)
    return (
        <div className='home-container'>
            <center>{_.map(user, profile => (
                <h1>Welcome {profile.name}</h1>
            ))}</center>
        </div>
    )}