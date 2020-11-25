import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import {MovieContextProvider} from './MovieContext'

ReactDOM.render(
    <MovieContextProvider>
        <App />
    </MovieContextProvider>,
    document.getElementById('root')
)
