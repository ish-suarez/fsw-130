import React, { Component } from 'react'

// Importing Lodash and Context
import _ from '../../node_modules/lodash'
import { TodoConsumer } from '../TodoContext'

import TodoCard from './TodoCard'

export default class Main extends Component {
    render() {
        return(
            <main>
                <h3 className='outputHeader'>List Of To Dos</h3>
                <TodoConsumer>
                    {todo => (
                        <div className='listedTodo'> 
                            {_.map(todo.todos, (item, i) => (
                                <TodoCard key={item.id} id={item.id} title={item.title} description={item.description} url={item.url} comments={item.comments} />
                            ))}
                        </div>
                    )}
                </TodoConsumer>
            </main>
        )
    }
}
