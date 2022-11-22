import React from 'react';
import './ToDo.css';
const ToDo = (props) => {
    const {userId, title, completed} = props.todo;
    return (
        <div className='todo'>
            <h1>User ID: {userId}</h1>
            <h3>Title: {title}</h3>
            <h4>Task Status: {String(completed)}</h4>
        </div>
    );
};

export default ToDo;