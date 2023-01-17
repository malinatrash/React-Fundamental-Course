import Posts from "../pages/Posts/Posts";
import {Navigate, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Error from "../pages/Error";
import classes from '../components/UI/AppRouter.module.css'
import React from "react";

const AppRouter = () => {
    return(
        <div className={classes.router}>
            <Routes>
                <Route path='/ReactBegin/posts' element={<Posts/>}/>
                <Route path='/ReactBegin/about' element={<About/>}/>
                <Route path='/ReactBegin/error' element={<Error/>}/>
                <Route path='/ReactBegin/*' element={<Navigate to="/ReactBegin/error" replace />} />)
                <Route path='/ReactBegin/' element={<Navigate to="/ReactBegin/posts" replace />} />)
                <Route path='/' element={<Navigate to="/ReactBegin/posts" replace />} />)
            </Routes>
        </div>
    );
};

export default AppRouter;