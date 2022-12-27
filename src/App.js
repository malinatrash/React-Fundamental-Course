import './styles/App.css';
import {useState} from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JS', body: 'base'},
        {id: 2, title: 'Python', body: 'petuhon'},
        {id: 3, title: 'Swift', body: 'cringe'},
        {id: 4, title: 'Kotlin', body: 'bigger cringe'},
        {id: 5, title: 'C++', body: 'brutality man'}
    ]);
    const [post, setPost] = useState({title: '', body: ''});
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            title,
            body
        }
        setPosts([...posts, newPost])
        setPost({title: '', body: ''})
    }

    return (
    <div className="App">
        <form>
            <MyInput
                value={post.title}
                onChange={ e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="Название поста"
            />
            <MyInput
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="Описание поста"
            />
            <MyButton onClick={addNewPost} >Создать пост</MyButton>
        </form>
        <PostList posts={posts} title={'ЯП'}/>
    </div>
  );
}

export default App;
