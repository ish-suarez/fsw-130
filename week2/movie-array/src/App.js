import React from 'react'

// Importing Components
import Header from './components/Header'
import Main from './components/Main'
import MovieInput from './components/MovieInput'
import Footer from './components/Footer'

// Importing Styles
import './styles.css'

export default function App() {
    return (
        <div>
            <Header />
            <Main />
            <MovieInput />   {/* Displaying Components */}
            <Footer />
        </div>
    )
}