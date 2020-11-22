import React from 'react'
import {useTheme} from '../../ThemeContext'

// Using Theme Context for the Header Component

export default function Header() {
    const darkTheme = useTheme()
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem'
    }
    return (
            <header style={themeStyles}>Hello Welcome</header>
    )
}