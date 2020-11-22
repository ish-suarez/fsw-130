// Functional Context
import React from 'react'
import {useTheme, useThemeUpdate} from './ThemeContext'

// Components being imported
import Header from './components/body/Header'
import Main from './components/body/Main'
import Footer from './components/body/Footer'
import Button from './components/Button'

export default function ContextApp(){
    return (
        <> 
            <Header />
            <Main />
            <Footer />
            <Button />
        </>
    )
}