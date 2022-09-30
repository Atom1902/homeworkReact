import React from 'react';
import {useReducer, useState} from 'react';

import Todo from "./Cats.js";



export const ACTIONS = {
    ADD_TODO:'add_todo',
    DELETE_TODO: 'delete_todo'
}
function reducer(todos, action){
    switch (action.type) {

        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]

        case ACTIONS.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payload.id)
        default:
            return todos
    }
}
function newTodo(name){
    return{id:Date.now(), name: name, complete: false}
}


export function Cat () {
    const [todos, dispatch] = useReducer(reducer, [])
    const [name, setName] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        dispatch ({ type: ACTIONS.ADD_TODO, payload:{ name: name }})
        setName('')
    }
    return (
        <div >
            <form onSubmit={handleSubmit}>Add Cat:
                <input type="text" value={name} onChange={e=> setName(e.target.value)}/>
                <button type="submit">Save</button>
            </form>
            {todos.map(todo=>{
                return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
            })}
        </div>
    );
};


