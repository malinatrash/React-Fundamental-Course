import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data);
    })
    useEffect(() => {
        fetchPostById(params.id)
    },[])
    return(
        <div>
            <h1>Пост №{params.id}</h1>
            { isLoading
                ? <Loader/>
                : <div>{post.title}</div>
            }
        </div>
    );
};

export default PostIdPage;