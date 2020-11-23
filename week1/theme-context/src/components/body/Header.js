import React from 'react'
import {useTheme} from '../../ThemeContext'

// Using Theme Context for the Header Component

export default function Header() {
    const darkTheme = useTheme()
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
    }
    return (
        <div className='headerContainer'>
            <header style={themeStyles}>
                <h1>Hello Welcome To Theme Swap</h1>
            </header>
        </div>
    )
}