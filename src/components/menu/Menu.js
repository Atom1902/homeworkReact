import React from 'react';
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <h3>ABOUT</h3>
            <ol>
                <li><Link to={'todos'}>TODOS</Link></li>
                <li><Link to={'albums'}>ALBUMS</Link></li>
                <li><Link to={'comments'}>COMENTS</Link></li>
            </ol>
        </div>
    );
};

export {Menu};