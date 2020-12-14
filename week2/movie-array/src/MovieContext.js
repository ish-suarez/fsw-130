import React, {Component} from 'react'
const {Provider, Consumer} = React.createContext() // Creating Context

class MovieContextProvider extends Component {
    state = {                                      // Setting State
        inputMovie: '',
        movies: ['End Game', 'Dark Knight', 'Back To The Future', 'American Gangster']
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value}) // Handel Chnage From rm
    }

    handleSubmit = (e) => {
        e.preventDefault()                               // Handle Form Submit
        this.setState({movies: [...this.state.movies, this.state.inputMovie]})
    }

    render() { 
        const {movies} = this.state
        return (
            <Provider value={{movies, handleChange: this.handleChange, handleSubmit: this.handleSubmit}}> 
                {this.props.children}                       {/* Passing Logic To Children */}
            </Provider>
        )
    }
}

export {MovieContextProvider, Consumer as MovieContextConsumer}