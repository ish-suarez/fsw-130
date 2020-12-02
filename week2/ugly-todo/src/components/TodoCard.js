import React, {useState} from 'react'

// Importing Context Consumer
import {TodoConsumer} from '../TodoContext'

export default function TodoCard (props) {
    const [editSelected, setEditSelected] = useState(false)
    const [changeTitle, setTitle] = useState(props.title)
    const [changeDescription, setDescription] = useState(props.description)

    return (
        <TodoConsumer>
            {todo => (
                <div className='mappedTodos' id={props.id} key={todo.id}>
                    <h3>{props.title}</h3>
                    <h3>{props.description}</h3> 
                        {editSelected && 
                            <form>
                                <input name='title' value={changeTitle} placeholder='Edit Title' onChange={(e) => setTitle(e.target.value)} />
                                <input name='description' value={changeDescription} placeholder='Edit Description' onChange={(e) => setDescription(e.target.value) } />
                            </form>}
                    <button onClick={() => {
                        setEditSelected(!editSelected)
                        todo.editTodo(props.id, changeTitle, changeDescription)
                    }}>Edit To Do</button>
                    <img src={props.url} alt={props.title} />
                    <p>{props.comments}</p>
                    <br/>
                    <button id={props.id} onClick={() => todo.deleteTodo(props.id)}>Delete Your To Do</button>
                </div>
            )}
        </TodoConsumer>
    )
}