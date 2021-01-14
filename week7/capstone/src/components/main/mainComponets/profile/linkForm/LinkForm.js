import React, {useState} from 'react';

import './form.css';

import {useDispatch, useSelector} from 'react-redux';
import { addUrl } from '../../../../../Redux/profile';

export default function LinkForm() {

    const profile = useSelector(profile => profile.profileReducer);
    const dispatch = useDispatch();

    const formInput = [{...profile, url: ''}];

    const [inputs, setInput] = useState(formInput);
    
    const handleChange = (e) => {
    const {name, value} = e.target;
    setInput(prevInput => ({...prevInput, [name]: value}));
}

const formSubmit = (e) => {
    e.preventDefault();
    dispatch(addUrl(inputs));
    setInput(formInput);
}
    return (
        <form onSubmit={formSubmit}>
            <h4 style={{color: '#033860', backgroundColor: '#d6dbc8'}}>Paste A Link To Your Repository</h4>
            <input name='url' type='url' value={inputs.url} onChange={handleChange} placeholder='Paste a link'required />
            <button>Post</button>
        </form>
    );
}


