import React from 'react';

import {Comments, Users} from "./components";

const App = () => {

    return (
        <div>
            <div>Users</div>
            <Users/>
            <div>Comments</div>
            <Comments/>


        </div>
    );
};

export default App;