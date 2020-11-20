import React from 'react'
import FunctionContextComponent from './FunctionContextComponent'
import {ThemeProvider} from './ThemeContext'

export default function App() {
    return (
        <ThemeProvider> {/*  wrapping logic for handling state   */}
            <FunctionContextComponent />
        </ThemeProvider>
    )
}

