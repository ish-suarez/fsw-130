import React from 'react'
import {useThemeUpdate} from '../ThemeContext'

export default function Button() {
    const toggleTheme = useThemeUpdate()
    return (
        <div className='buttonContainer'>
            <button className='themeButton' onClick={toggleTheme}>Change Theme</button>
        </div>
        
    )
}