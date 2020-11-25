import React, {Component} from 'react'
const {Provider, Consumer} = React.createContext()

class MovieContextProvider extends Component {
    state = {
        inputMovie: '',
        movies: ['End Game', 'Dark Knight', 'Back To The Future']
    }

    handleChange = (e) => {
        this.setState({[e.target]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({movies: [...this.state.movies, this.state.inputMovie]})
    }

    render() { 
        return (
            <Provider value={{movies: this.state.movies, handleChange: this.handleChange, handleSubmit: this.handleSubmit}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {MovieContextProvider, Consumer as MovieContextConsumer}