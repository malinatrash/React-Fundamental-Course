import '../src/styles/App.css';
import {Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import NavigationBar from "./components/navigationBar/NavigationBar";

const App = () => {
    return(
        <div>
            <NavigationBar/>
            <Posts/>
            <Routes>
                {/*<Route path='/' element={<Posts/>}/>*/}
                <Route path='/about' element={<About/>}/>
            </Routes>
        </div>
    )
}

export default App;
