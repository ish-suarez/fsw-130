import React from 'react'
import ReactDOM from 'react-dom'

// Importing App and Context
import App from './App'
import {TodoProvider} from './TodoContext'

ReactDOM.render(
    <TodoProvider>
        <App />
    </TodoProvider>,
    document.getElementById('root')
)