import React, { useState, useMemo, useEffect } from "react"
import Grid from "@material-ui/core/Grid";



export default function UseMemoExample() {

    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)
    //old style will call the slowFunction every time the page render
    //const doubleNum = slowFunction(number)
    //new Style is to useMemo
     const doubleNum = useMemo(() => {
        return slowFunction(number)
    }, [number]) 
    /* const doubleNum = useEffect(()=>{
        slowFunction(number)
    }, [number]) */
     const themeStyle = useMemo(()=> { //avoiding calling the use effict by setting the use memo
       return{ backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'}
    },[dark]) // so we use the dark cuz it's the only thing is changes in this object
 
      /* const themeStyle = {  //Object Refrence not value- not equals to themeStyle cz the reference not equal (console will log theme change)
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }  */
    useEffect(() => {
        console.log("Theme Changed") // will be called every render cz the
                                     // reference change every time
                                     // use memo avoiding the refrence changes 
    }, [themeStyle])


    return (
        <Grid container direction="column" justify="center" alignItems="center" style={themeStyle}>
            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
            <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
            <div style={themeStyle}>{doubleNum}</div>
        </Grid>
    );
}
function slowFunction(num) {
    console.log('Calling Slow Function')
    for (let i = 0; i <= 2000000000; i++) { }
    return num
}


/**
 *  why we need to use the useMemo
    const [number,setNumber] = useState(0)
    const [dark, setDark] =  useState(false)
    const doubleNum = slowFunction(number)
    const themeStyle = {
        backgroundColor: dark ? 'black':'white',
        color: dark? 'white':'black'
    }


    return (
        <Grid container direction="column" justify="center" alignItems="center" style={themeStyle}>
            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
            <button onClick={()=> setDark(prevDark => !prevDark)}>Change Theme</button>
            <div style={themeStyle}>{doubleNum}</div>
        </Grid>
    );
}
function slowFunction(num){
    console.log('Calling Slow Function')
    for(let i=0; i<=2000000000; i++){}
    return num * 2
}
 *
 *
 *
 */

