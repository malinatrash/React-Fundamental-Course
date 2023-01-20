import React from 'react';
import MyButton from "./UI/button/MyButton";
import './UI/postItem.css'
import {useNavigate} from "react-router-dom";

const PostItem = (props) => {
    const router = useNavigate()
    console.log(router);
    return (
        <div className="post">
            <div className="post-content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>{props.post.body}</div>
            </div>
            <div className="button-container">
                <MyButton onClick={() => router(`/ReactBegin/posts/${props.post.id}`) }>Открыть</MyButton>
                <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
            </div>
        </div>
    );
};

export default PostItem;
