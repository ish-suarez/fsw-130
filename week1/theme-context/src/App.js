import React from 'react'
import ContextApp from './ContextApp'
import FunctionContextComponent from './ContextApp'
import {ThemeProvider} from './ThemeContext'

export default function App() {
    return (
        <ThemeProvider> {/*  wrapping logic for handling state   */}
            <ContextApp />
        </ThemeProvider>
    )
}

