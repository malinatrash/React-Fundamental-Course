import '../src/styles/App.css';
import {Link, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import cl from './components/UI/button/MyButton.module.css'
import NavigationBar from "./components/navigationBar/NavigationBar";

const App = () => {
    return(
        <div>
            <NavigationBar/>
            <Routes>
                <Route path='/about' element={<About/>}/>
                <Route path='/' element={<Posts/>}/>
            </Routes>
        </div>
    )
}

export default App;
