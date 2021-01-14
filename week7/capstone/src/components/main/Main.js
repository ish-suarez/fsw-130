import React from 'react';

import {Switch, Route} from 'react-router-dom';

import Profile from './mainComponets/profile/Profile';
import Grades from './mainComponets/grades/Grades';
import Home from './mainComponets/home/Home';

import './main.css';

export default function Main() {
    return (
        <main className='main'> 
            <Switch>
                <Route exact path={['/', '/Home']} component={Home} />
                <Route exact path='/Profile' component={Profile} />
                <Route exact path='/Grades' component={Grades} />
            </Switch>
        </main>
    );
}

