import React from 'react'

// Importing Context
import {TodoConsumer} from '../TodoContext'

export default function TodoInput() {
    return(
        <TodoConsumer>
            {todo => (
                <form className='inputForm ' onSubmit={todo.formSubmit}>
                    <h4>Add Your To Do</h4>
                    {/* Title Input */}
                    <label>To Do Title: </label>
                    <input name='title' type='text' value={todo.title} placeholder='Title' onChange={todo.handleChange} required/>
                    <br/>
                    <label>Description: </label>
                    <input name='description' type='text' value={todo.description} placeholder='Description' onChange={todo.handleChange} required/>
                    <br/>
                    <label>Image URL: </label>
                    <input name='url' type='url' value={todo.url} placeholder='https://imageURL.com' onChange={todo.handleChange} required/>
                    <br/>
                    <button>Add Your To Do</button>
                </form>
            )}
        </TodoConsumer>
    )
}