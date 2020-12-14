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
// -------------------------------------------Setting State Hooks For Comments ---------------
    const [userComments, setUserComments] = useState([])
    const [inputComment, setInputCommnet] = useState('')
// ------------------------------------------Remove Comment------------------------------------------
    const removeComment = (id) => {
        const indexOfComment = _.findIndex(userComments, id)
        const newData = userComments
        newData.splice(indexOfComment, 1)
        setUserComments(newData)
        setTitle('')
        setDescription('')
        // const indexOfComment = userComments.indexOf(i.i)
        // const newData = userComments
        // newData.splice(indexOfComment, 1)
        // setUserComments(newData)
        // setTitle('')
    }

    return (
        <TodoConsumer>
            {todo => (
                <div className='mappedTodos' id={props.id} >
                    <h5>Title: {props.title}</h5>
                    <h5>Description: {props.description}</h5> 
                        {editSelected && 
                            <form>
                                <input name='title' value={changeTitle} placeholder='Edit Title' onChange={(e) => setTitle(e.target.value)} />
                                <input name='description' value={changeDescription} placeholder='Edit Description' onChange={(e) => setDescription(e.target.value) } />
                            </form>}
                    <button className='editButton' onClick={() => {
                        setEditSelected(!editSelected)
                        todo.editTodo(props.id, changeTitle, changeDescription)
                    }}>Edit To Do</button>
                    <img src={props.url} alt={props.title} />
                    <div className='comments'>
                        <h5>Add Comment: </h5>
                        <input value={inputComment} placeholder='Comment' onChange={e => setInputCommnet(e.target.value)} />
                        <button onClick={() => {
                            setUserComments(userComments => [...userComments, inputComment])
                            setInputCommnet('')
                            console.log(userComments)
                        }}>Add Comment</button>
                        <h4>Comment Section</h4>
                            {userComments.map( item => (
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