import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTodo} from '../redux/todoSlice';

const TodoInput = () => {
    const [text, setText ] = useState('');
    const dispatch = useDispatch();

    const handleAdd = () => {
        if(text.trim() == '') return;
        dispatch(addTodo(text));
        setText('');
    };

    return(
        <div>
            <input
                type='text'
                value={text}
                onChange={(e)=> setText(e.target.value)}
                placeholder='"Enter a todo'
            />
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}

export default TodoInput;