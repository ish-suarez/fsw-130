import React from 'react'

// Importing Components
import Header from './components/Header'
import Main from './components/Main'
import TodoInput from './components/TodoInput'

// Styles
import './components/styles/styles.css'

export default function App() {
    return (
        <div>
            <Header />
            <TodoInput />
            <Main />
        </div>
    )
}