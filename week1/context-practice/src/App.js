import React from 'react'

import Header from './components/body/Header'
import NavBar from './components/body/NavBar'
import Main from './components/body/Main'
import Footer from './components/body/Footer'

import './components/styles.css'

const App = () => 
    <div className='container'>
        <Header className='header' />
        <NavBar className='navBar' />
        <Main className='main' />
        <Footer className='footer' />
    </div>

export default App