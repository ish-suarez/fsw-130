// Functional Context
import React from 'react'
import './components/styles.css'

// Components being imported
import Header from './components/body/Header'
import Main from './components/body/Main'
import Footer from './components/body/Footer'

export default function ContextApp(){
    return (
        <> 
            <Header />
            <Main />
            <Footer />
        </>
    )
}