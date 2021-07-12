import React, { useState, useCallback,useMemo } from 'react'
import List from './List'
import Grid from "@material-ui/core/Grid";

export default function UseCallbackExample() {

    const [number, setNumber] = useState(1)
    const [dark, setDark] = useState(false)

    /*    const getItems = () => {
          return [number, number +1, number + 2 ]
      }  */
    // same as useMemo defintion, but the main difference 
    // is that useCallback will set to the entire function
    // so we can later use the getItems as a function 
    // but the useMemo is going to set to the array that
    // returned from this function so
    //const getItems = useMemo((incremental) => {
     //  return [number, number + 1 + incremental, number + 2 + incremental]
    //},[number])// is not correct !!!
     const getItems = useCallback((incremental) => {
        return [number, number + 1 +incremental, number + 2 +incremental]
    }, [number]) 

    const theme = {
        backgroundColor: dark ? '#333' : '#FFF',
        color: dark ? '#FFF' : '#333',
    }

    return (
        <Grid direction="column" style={theme} xs='12' >
            <input type="number" value={number}
                onChange={e => setNumber(parseInt(e.target.value))}
            />
            <button onClick={() => setDark(prevDark => !prevDark)}>
                Toggle theme
            </button>
            <List getItems={getItems} />
        </Grid>
    );
}