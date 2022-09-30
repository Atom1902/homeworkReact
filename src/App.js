import React from 'react';
import './App.css';


import {Cat, Dog} from "./components";

const App = () => {

    return (
        <div className="form" >
            <div >
                <Cat/>
            </div>

            <div >
                <Dog/>
            </div>


        </div >
    );
};

export default App;