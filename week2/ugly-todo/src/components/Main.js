import React, { Component } from 'react'

// Importing Lodash and Context
import _ from '../../node_modules/lodash'
import { TodoConsumer } from '../TodoContext'

import TodoCard from './TodoCard'
import TodoInput from './TodoInput'

export default class Main extends Component {
    render() {
        return(
            <main>
                
                <TodoInput />
                
                <TodoConsumer>
                    {todo => (
                        <div className='listedTodo'> 
                            {_.map(todo.todos, (item, i) => (
                                <>
                                    <TodoCard id={item.id} title={item.title} description={item.description} url={item.url} />
                                </>
                            ))}
                        </div>
                    )}
                </TodoConsumer>
            </main>
        )
    }
}
