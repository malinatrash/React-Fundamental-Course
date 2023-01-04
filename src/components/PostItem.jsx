import React from 'react';
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
    console.log(props)
    return (
        <div className="post">
            <div className="post-content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>{props.post.body}</div>
            </div>
            <div className="post-button">
                <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
            </div>
        </div>
    );
};

export default PostItem;
