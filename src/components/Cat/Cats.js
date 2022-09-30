import React from 'react';

import { ACTIONS } from './Cat.js'


export default function Todo  ({ todo, dispatch}) {


    return (
        <div >
            <span >
                {todo.name}
            </span>

            <button style={{margin: 10 }}  onClick={()=> dispatch({ type: ACTIONS.DELETE_TODO,
                payload: {id: todo.id}})}>Delete</button>
        </div>
    )
}

