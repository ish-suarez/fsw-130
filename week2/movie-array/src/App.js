import React from 'react'

import Header from './components/Header'
import Main from './components/Main'
import MovieInput from './components/MovieInput'
import Footer from './components/Footer'

import './styles.css'

export default function App() {
    return (
        <div>
            <Header />
            <Main />
            <MovieInput />
            <Footer />
        </div>
    )
}