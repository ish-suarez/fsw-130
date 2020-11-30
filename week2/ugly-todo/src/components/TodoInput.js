import React from 'react'

// Importing Context
import {TodoConsumer} from '../TodoContext'

export default function TodoInput() {
    return(
        <TodoConsumer>
            {todo => (
                <form onSubmit={todo.formSubmit}>
                    <h4>Add Your To Do</h4>
                    {/* Title Input */}
                    <label>To Do Title: </label>
                    <input name='title' type='text' value={todo.title} placeholder='Title' onChange={todo.handleChange} />
                    <br/>
                    <label>Description: </label>
                    <input name='description' type='text' value={todo.description} placeholder='Description' onChange={todo.handleChange} />
                    <br/>
                    <label>Image URL: </label>
                    <input name='url' type='text' value={todo.url} placeholder='https://imageURL.com' onChange={todo.handleChange} />
                    <br/>
                    <button>Add Your To Do</button>
                </form>
            )}
        </TodoConsumer>
    )
}