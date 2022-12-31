import './styles/App.css';
import {useEffect, useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";
import {useFetching} from "./hooks/useFetching";

const App = () => {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll();
        setPosts(response);
    })

    useEffect(() => {
        fetchPosts();
    }, [])

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    };

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    };

    return (
    <div className="App">
        <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
            Создать пост
        </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
            <PostForm create={createPost}/>
        </MyModal>
        <hr style={{margin: '15px 0'}}/>
        <PostFilter
            filter={filter}
            setFilter={setFilter}
        />
        {postError &&
            <h1>Произошла ошибка! ${postError}</h1>
        }
        {isPostLoading
            ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
            :
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Список постов'}/>
        }
    </div>
  );
}

export default App;
