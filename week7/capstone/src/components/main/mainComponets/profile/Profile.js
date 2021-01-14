import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import _ from 'lodash';

import LinkForm from './linkForm/LinkForm';

import './profile.css';

export default function Profile() {
    const initialState = useSelector(profile => profile.profileReducer);
    const dispatch = useDispatch();

    console.log(initialState)
    
    return (
        <div style={{borderTop: '1px solid gray' ,marginTop: '15px', paddingTop: '10px'}} className='movies'>
            <div style={{textAlign: 'center', margin: 'auto'}}>
                {_.map(initialState,  profile => (
                    <div>
                        <h1 style={{float: 'right', paddingRight: '50px', color: 'white'}}>{profile.name}</h1>
                        <h4 style={{fontSize: '11px', float: 'right',  color: 'white', paddingRight: '40px', paddingTop: '46px'}}>{profile.schoolName}</h4>
                        <img style={{width: '66px', borderRadius: '100%', margin: 'auto', marginTop: '20px', marginRight: '20px' , float: 'right'}} src={profile.picture} alt={profile.name} />
                    </div>
                ))}
            </div>

            <div>
                <h2 style={{color: 'white', textAlign: 'center', padding: '50px', paddingTop: '200px'}}>Capstone Due</h2>
            </div>

            <div style={{float: 'right', margin: 'auto', marginTop: '60px', marginRight: '60px'}}>
                <LinkForm />
            </div>
            <div style={{color: 'white', float: 'right', paddingTop: '50px'}}>
                {_.map(initialState, profile => (
                    <h4>{profile.url}</h4>
                ))}
            </div>
        </div>
    );
}


