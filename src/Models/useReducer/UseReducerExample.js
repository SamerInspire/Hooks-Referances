import React, { useState, useReducer } from "react";
import Grid from "@material-ui/core/Grid";
import Todo from './Todo'
export const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGOLE_TODO: 'toggole-todo',
    DELETE_TODO: 'delete-todo'
}
export default function UseReducerExample() {

    function reducer(todos, action) {
        switch (action.type) {
            case ACTIONS.ADD_TODO:
                return [...todos, newTodo(action.payload.name)]
            case ACTIONS.TOGGOLE_TODO:
                return todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        return { ...todo, complete: !todo.complete }
                    } else {
                        return todo;
                    }
                })
            case ACTIONS.DELETE_TODO:
                return todos.filter(todo => todo.id !== action.payload.id)
            default:
                return todos
        }
    }
    function newTodo(name) {
        return { id: Date.now(), name: name, complete: false }
    }
    function handelSubment(e) {
        e.preventDefault()
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name, } })
        setName('')
    }

    const [todos, dispatch] = useReducer(reducer, [])
    const [name, setName] = useState('')
    return (
        <Grid container justify="center" style={{ width: '100%', height: '100%' }}>
            <form onSubmit={handelSubment}>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </form>
            {todos.map(todo => {
                return (
                    <Grid xs={12}>
                        <Todo key={todo.id} todo={todo} dispatch={dispatch} />
                    </Grid>
                )
            }
            )}
        </Grid>
    );
}



/* Simple Example


const ACTION = {
    INCREMET:'increment',
    DECREMENT:'decrement'
}
export default function UseReducerExample(){

function reducer(state,action){
    switch (action.type){
        case ACTION.INCREMET:
            return {count: state.count+1}
        case ACTION.DECREMENT:
            return {count: state.count-1}
        default:
            return state
    }

}
    const [state,dispatch] = useReducer(reducer,{count:0})
    //const [count,setCount] = useState(0)//useState(0) most like => useReducer(reducer,0)

    function decrementCount() {
        dispatch({type:ACTION.DENCREMET})
    }
    function incrementCount() {
        dispatch({type:ACTION.INCREMET})
    }


    return (
        <Grid container justify="center" alignItems="center" style={{width:'100%',height:'100%'}}>
            <button onClick={decrementCount}>-</button>
            <span >{state.count}</span>
            <button onClick={incrementCount}>+</button>
        </Grid>
    );
}
*/