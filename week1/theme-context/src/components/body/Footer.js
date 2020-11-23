import React from 'react'
import {useTheme} from '../../ThemeContext'

// Using Theme Context for the Footer Component

export default function Footer() {
    const darkTheme = useTheme()
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem'
    }
    return (
        <footer className='footerContainer' style={themeStyles}> 
            <h2>Ismael inc.</h2>
        </footer>
    )
}