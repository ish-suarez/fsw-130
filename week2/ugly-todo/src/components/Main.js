import React, { Component } from 'react'

// Importing Lodash and Context
import _ from '../../node_modules/lodash'
import { TodoConsumer } from '../TodoContext'

export default class Main extends Component {
    render() {
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
                                    {/* Trying to Display an Form after clicking button in order to */}
                                    {/* <button id={item.id} onClick={() => todo.editTodo}>Edit Title and Description</button> */}
                                        {/* {item.editSelected ? (
                                            <form onSubmit={todo.editTodo}>
                                                <input name='title' value={item.title} placeholder='Edit Title' onChange={todo.handleChange} />
                                                <input name='description' value={item.description} placeholder='Edit Description' onChange={todo.handleChange} />
                                            </form>
                                        ): null} */}
                                    <img src={item.url} alt={item.title} />
                                    <p>{item.comments}</p>
                                    <br/>
                                    <button id={item.id} onClick={() => todo.deleteTodo(item.id)}>Delete Your To Do</button>
                                </div>
                            ))}
                        </div>
                    )}
                </TodoConsumer>
            </main>
        )
    }
}
