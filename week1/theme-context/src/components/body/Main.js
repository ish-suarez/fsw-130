import React from 'react'
import {useTheme} from '../../ThemeContext'

import Button from '../Button'

// Using Theme Context for the Main Component

export default function Main() {
    const darkTheme = useTheme()
    const themeStyles = {
        backgroundColor: darkTheme ? '#413F54' : '#E0FBFC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '9rem',
        margin: 'auto'
    }
    return (
        <main className='mainContainer' style={themeStyles}> 
            <h1>We Have Two Themes</h1>
            <ul>
                <li>Light</li>
                <li>Dark</li>
            </ul>
            <Button />
        </main>
    )
}