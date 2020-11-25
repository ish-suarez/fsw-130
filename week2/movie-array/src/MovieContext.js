import React, {Component} from 'react'
const {Provider, Consumer} = React.createContext() // Using Context

class MovieContextProvider extends Component {
    state = {                                      // Setting State
        inputMovie: '',
        movies: ['End Game', 'Dark Knight', 'Back To The Future']
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value}) // Handel Chnage From Form
    }

    handleSubmit = (e) => {
        e.preventDefault()                               // Handle Form Submit
        this.setState({movies: [...this.state.movies, this.state.inputMovie]})
    }

    render() { 
        return (
            <Provider value={{movies: this.state.movies, handleChange: this.handleChange, handleSubmit: this.handleSubmit}}> 
                {this.props.children}                       {/* Passing Logic To Children */}
            </Provider>
        )
    }
}

export {MovieContextProvider, Consumer as MovieContextConsumer}