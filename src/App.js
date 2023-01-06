import '../src/styles/App.css';
import AppRouter from "./components/AppRouter";
import NavigationBar from "./components/navigationBar/NavigationBar";
import React from "react";

const App = () => {
    return(
        <div>
            <NavigationBar/>
            <AppRouter/>
        </div>
    )
}

export default App;
