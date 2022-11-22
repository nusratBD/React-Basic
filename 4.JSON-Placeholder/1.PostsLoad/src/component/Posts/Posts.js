import React from 'react';
import './Posts.css';

const Posts = (props) => {
    const {title, body} = props.posts;
    return (
        <div className='post'>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    );
};

export default Posts;