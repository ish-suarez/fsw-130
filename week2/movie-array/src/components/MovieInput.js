import React from 'react'
import {MovieContextConsumer} from '../MovieContext'

export default function MovieInput(props) {
    return(
        <MovieContextConsumer>
            {context => (
                <form onSubmit={context.handleSubmit}>
                    <input 
                        name='inputMovie' 
                        value={context.movieInput} 
                        placeholder='Title Of Film' 
                        onChange={context.handleChange} 
                    />
                    <button>Add Movie</button>
                </form>
            )}
        </MovieContextConsumer>
    )
}