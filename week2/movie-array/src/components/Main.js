import React from 'react'
import _ from '../../node_modules/lodash'
import {MovieContextConsumer} from '../MovieContext'

export default function Main() {
    return(
        <div className='main'>
            <h1>Top Movies</h1>
            <MovieContextConsumer>
                {context => (
                    <ol>
                        {_.map(context.movies, movie => <li>{movie}</li>)}
                    </ol>
                )}
            </MovieContextConsumer>
        </div>
    )
}