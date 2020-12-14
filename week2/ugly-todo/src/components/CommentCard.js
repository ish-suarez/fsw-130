import React, {useState} from 'react'

// Import Context Consumer
import { TodoConsumer } from '../TodoContext'

export default function CommentCard(props) {
    // const [comment, setComment] = useState([])
    // const [inputComment, setInputCommnet] = useState('')
    return (
        <div>
        {props.comments} -

        <button id={props.comments} onClick={(id) => {
                props.removeComment(id)
            }}>Delete Comment</button>
        </div>
    )
}