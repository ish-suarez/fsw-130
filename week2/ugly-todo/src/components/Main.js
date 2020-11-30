import React from 'react'

// Importing Lodash and Context
import _ from '../../node_modules/lodash'
import { TodoConsumer } from '../TodoContext'

export default function Main() {

    return(
        <main>
            <h3 className='outputHeader'>List Of To Dos</h3>
            <TodoConsumer>
                {todo => (
                    <div className='listedTodo'> 
                        {_.map(todo.todos, (item, i) => (
                            <div className='mappedTodos' key={i}>
                                <h3>{item.title}</h3>
                                <h3>{item.description}</h3>
                                <img src={item.url} alt={item.title} />
                                <br/>
                                <button>Delete Your To Do</button>
                            </div>
                        ))}
                    </div>
                )}
            </TodoConsumer>
        </main>
    )
}