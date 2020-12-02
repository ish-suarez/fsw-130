import React, {useState} from 'react'

import _ from '../../node_modules/lodash'

// Importing Context Consumer
import {TodoConsumer} from '../TodoContext'
import CommentCard from './CommentCard'

export default function TodoCard (props) {
// ----------------------------------------------Setting State Hooks For Edit Button And From Input -----------------------
    const [editSelected, setEditSelected] = useState(false)
    const [changeTitle, setTitle] = useState(props.title)
    const [changeDescription, setDescription] = useState(props.description)
// -------------------------------------------Setting 
    const [userComments, setUserComments] = useState([])
    const [inputComment, setInputCommnet] = useState('')

    const removeComment = (comment) => {
        const indexOfComment = userComments.indexOf(comment)
        const newData = userComments
        newData.splice(indexOfComment, 1)
        setUserComments(newData)
        setTitle('')
        
    }

    return (
        <TodoConsumer>
            {todo => (
                <div className='mappedTodos' id={props.id} >
                    <h3>Title: {props.title}</h3>
                    <h3>Description: {props.description}</h3> 
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
                    <div className='comments'>
                        <h5>Add Comment: </h5>
                        <input value={inputComment} placeholder='Comment' onChange={e => setInputCommnet(e.target.value)} />
                        <button onClick={() => {
                            setUserComments(prevState => [...prevState, inputComment])
                            setInputCommnet('')
                            console.log(userComments)
                        }}>Add Comment</button>
                        <h4>Comment Section</h4>
                            {_.map(userComments, item => (
                                <CommentCard  comments={item} removeComment={removeComment}/>
                            ))}
                    </div>
                    <br/>
                    <button id={props.id} onClick={() => todo.deleteTodo(props.id)}>Delete Your To Do</button>
                </div>
            )}
        </TodoConsumer>
    )
}