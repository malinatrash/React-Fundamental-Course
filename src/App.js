import './styles/App.css';
import {useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySeleсt";

function App() {
    const [posts, setPosts] = useState([]);
    const [selectedSort, setSelectedSort] = useState("");

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    };

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    };

    const sortPosts = (sort) => {
        setSelectedSort(sort);
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
    };

    return (
    <div className="App">
        <PostForm create={createPost}/>
        <MySelect
            value={selectedSort}
            onChange={sortPosts}
            defaultValue="Сортировка по:"
            options={[
                {value: 'title', name: "Названию"},
                {value: 'body', name: "Описанию"},
            ]}
        />
        {posts.length !== 0
            ? <PostList remove={removePost} posts={posts} title={'Список постов'}/>
            : <h2 style={{textAlign: "center"}}>Посты не найдены!</h2>
        }
    </div>
  );
}

export default App;
