import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import {MovieContextProvider} from './MovieContext'

ReactDOM.render(
    <MovieContextProvider> 
        <App />                      {/* Wrapping App With Context */}
    </MovieContextProvider>,
    document.getElementById('root')
)
