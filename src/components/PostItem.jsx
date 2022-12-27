import React from 'react';

const PostItem = (props) => {
    console.log(props)
    return (
        <div className="post">
            <div className="post-content">
                <strong>{props.number}. {props.post.title}</strong>
                <div>{props.post.body}</div>
            </div>
            <div className="post-button">
                <button>Удалить</button>
            </div>
        </div>
    );
};

export default PostItem;
