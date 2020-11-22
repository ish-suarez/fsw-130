import React from 'react'
import {useTheme} from '../../ThemeContext'

// Using Theme Context for the Main Component

export default function Main() {
    const darkTheme = useTheme()
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem'
    }
    return (
            <main style={themeStyles}> Meat and Potatos</main>
    )
}