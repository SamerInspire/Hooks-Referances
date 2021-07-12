import React, { useState } from "react"
import Grid from "@material-ui/core/Grid";

export default function UseStateExample() {

    /*  if (true) {
        useState()
    }  */
    //called in the exact same order
     //useState() //1
     //useState() //2
     //useState() //3

    // the value 4 will be called once the the
    // value changes called excuted cuz it's like Constructor
    // every time the count rendered it will be called
    //const [count, setCount] = useState(4)  
    /* 
     function intialCount(){
        console.log('run function');
        return 4;
    }
    const [count, setCount] = useState(intialCount())   */
     

    //by change it to arrow function it's going to be 
    // called only when the function component is rendered
    /*  const [count, setCount] = useState(()=>{
        console.log('run function');
        return 4;
    })

    function decrementCount() {
        
        // the value will dec only 1, cuz the value will be
        // rendered and 4 will stay for both setCount 4-1 and 4-1
        
        //setCount(count -1); // 4-1
        //setCount(count -1); // 4-1 
        
        
        //by using the arrow function the value will be updated 
        //cuz the refrence will be for exact same value
        setCount(prevCount => prevCount - 1) //4-1
        //setCount(prevCount => prevCount - 1) //3-1
        
    }
    function incrementCount() {
        setCount(prevCount => prevCount + 1)
    } */
    //const theme ='';
    // useState for Objects 
     const [state,setState] = useState({count: 4, theme:'blue'})
    const count = state.count
    const theme = state.theme
    
    function decrementCount()
    {
        setState(prevState=> {
            // the main reason for not merging the current state
            // cuz you can create mutlti states to set vars
            //  return {count: prevState.count - 1 } // the theme will be removed
             return {...prevState,count: prevState.count - 1 }//Merged
            //return {count: prevState.count - 1 , theme: 'red' }
        })
    }
    function incrementCount()
    {
        setState(prevState=> {
            return {count: prevState.count + 1  }
        })
    }
    return (
        <Grid container justify="center" alignItems="center" style={{background:theme, width:'100%',height:'100%'}}>
            <button onClick={decrementCount}>-</button>
            <span >{count}</span>
            <button onClick={incrementCount}>+</button>
        </Grid>
    );
}