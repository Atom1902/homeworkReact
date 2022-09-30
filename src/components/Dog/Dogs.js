import React from 'react';

import { ACTION } from './Dog.js'


export default function Todo  ({ todo, dispatch}) {


    return (
        <div >
            <span >
                {todo.name}
            </span>

            <button style={{margin: 10 }}  onClick={()=> dispatch({ type: ACTION.DELETE_TODO,
                payload: {id: todo.id}})}>Delete</button>
        </div>
    )
}

