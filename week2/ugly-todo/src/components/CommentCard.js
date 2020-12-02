import React, {useState} from 'react'

// Import Context Consumer
import { TodoConsumer } from '../TodoContext'

export default function CommentCard(props) {
    // const [comment, setComment] = useState([])
    // const [inputComment, setInputCommnet] = useState('')
    return (
        <div>
            <p>{props.comments}</p>

            <button onClick={() => {
                props.removeComment(props.comments)
            }}>Delete Comment</button>
        </div>
    )
}