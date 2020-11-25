import React from 'react'
import {MovieContextConsumer} from '../MovieContext'

export default function MovieInput(props) {
    return(
        <MovieContextConsumer className='movieForm'>
            {context => (
                <form onSubmit={context.handleSubmit}>
                    <h4>Add Your Movie</h4>
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