import './styles/App.css';
import {useState} from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {
    const [posts, setPosts] = useState([
        // {id: 1, title: 'JS', body: 'base'},
        // {id: 2, title: 'Python', body: 'petuhon'},
        // {id: 3, title: 'Swift', body: 'cringe'},
        // {id: 4, title: 'Kotlin', body: 'bigger cringe'},
        // {id: 5, title: 'C++', body: 'brutality man'}
    ]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
    <div className="App">
        <PostForm create={createPost}/>
        <PostList remove={removePost} posts={posts} title={'Список постов'}/>
    </div>
  );
}

export default App;
