import React, { useState, useRef, useEffect } from "react"
import Grid from "@material-ui/core/Grid";

export default function UseRefExample() {

    const [name,setName] = useState('')
    const inputRef = useRef(0)
    function focus() {
        inputRef.current.focus()
    }
    return (
        <Grid container direction="column" justify="center" alignItems="center">
        <input ref={inputRef} value={name}  onChange={e => setName(e.target.value)}/>
        <div> My Name is {name}</div>
        <button onClick={focus}> Focus</button>
        </Grid>
    );
}



/**
 //* Example RenderCount
   
 */
/**
 * Focus Example using reference
    const [name,setName] = useState('')
    const inputRef = useRef(0)
    function focus() {
        inputRef.current.focus()
    }
    return (
        <Grid container direction="column" justify="center" alignItems="center">
        <input ref={inputRef} value={name}  onChange={e => setName(e.target.value)}/>
        <div> My Name is {name}</div>
        <button onClick={focus}> Focus</button>
        </Grid>
    );
 */
/**
 // last example using useRef to store the old value
   const [name, setName] = useState('')
    const prevName = useRef(0)
    //console.log('prevName',prevName) // will be updated after the second rendering
    const [blah,setBlah] = useState('')
    useEffect(()=> {
       // storing the previous name value into our ref
       // if we want to set our previous name into a state 
       // it will force to rerender the function component
       prevName.current = name 
       console.log('prevName',prevName.current)
       console.log('name',name)
    },[name])
    return (
        <Grid container direction="column" justify="center" alignItems="center">
            <input value={name} onChange={e => setName(e.target.value)} />
            <div> My Name is {name} and it used to be {prevName.current}</div>
            <input onChange={e => setBlah(e.target.value)}/>
            {
                // this one for clear things out after it render
            }
            </Grid>
            );
 */