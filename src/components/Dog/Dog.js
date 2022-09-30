import React from 'react';
import {useReducer, useState} from 'react';

import Todo from "./Dogs.js";



export const ACTION = {
    ADD_TODO:'add_todo',
    DELETE_TODO: 'delete_todo'
}
function reducer(todos, action){
    switch (action.type) {
        case ACTION.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]
        case ACTION.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payload.id)
        default:
            return todos
    }
}
function newTodo(name){
    return{id:Date.now(), name: name, complete: false}
}


export function Dog () {
    const [todos, dispatch] = useReducer(reducer, [])
    const [name, setName] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        dispatch ({ type: ACTION.ADD_TODO, payload:{ name: name }})
        setName('')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>Add Dog:
                <input type="text" value={name} onChange={e=> setName(e.target.value)}/>
                <button type="submit">Save</button>
            </form>
            {todos.map(todo=>{
                return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
            })}
        </div>
    );
}


