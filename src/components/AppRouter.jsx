import React from 'react';
import NavigationBar from "./navigationBar/NavigationBar";
import Posts from "../pages/Posts";
import {Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Error from "../pages/Error";

const AppRouter = () => (
    <div>
        <NavigationBar/>
        <Routes>
            <Route path='/' element={<Posts/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/*' element={<Error/>}/>
        </Routes>
    </div>
);

export default AppRouter;