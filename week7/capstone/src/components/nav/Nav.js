import React from 'react';
import {Link} from 'react-router-dom';

import './nav.css';

export default function Nav() {
    return (
        <nav className='nav'>
            
            <Link className='link' to='/Home'>Home</Link>
            <Link className='link' to='/Profile'>Profile</Link>
            <Link className='link' to='/Grades'>Grades</Link>
        </nav>
    );
}
