import React, { useState, useEffect } from "react";

export default function UseEffectExample() {
     //Example 1
     const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    
     const handelResize = () => {
         setWindowWidth(window.innerWidth)
     }
 
     useEffect(()=>
     {
         window.addEventListener('resize', handelResize)
         console.log(windowWidth)
         //we should do a clean up when ever this parent function has been deleted 
         // cuz the listener within the useEffect
         // will not deleted and overhead our site
         // so we use the return as unmounting listener 
         // to remove the listener
         
     },[windowWidth])
 
 
     return (
         <div >{windowWidth}</div> // only updated in refresh !
     )
}


/* //Example 1

const [resourceType, setResourceType] = useState('Posts')
    const [items, setItems] = useState([])
    console.log("render")
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
        console.log("resourceType changes")
        //return()=>{ //* whenever the use effect run this code will excuted first!
        //    console.log('return from resource change')
        //}
    }, [resourceType])
    //sending [] - useEffect will called only in amount
    //not sending any - useEffect will called while the function is render
    //sending [var1,var2...] - useEffect will called only if any if the vars changes

    return (
        < >

            <div >
                <button onClick={() => setResourceType('Posts')}>Posts</button>
                <button onClick={() => setResourceType('Users')}>Users</button>
                <button onClick={() => setResourceType('Comments')}>Comments</button>
            </div>
            <div style={{width:'100%' }} >
                <h1>{resourceType}</h1>
                {items.map(items => {
                    return <pre>{JSON.stringify(items)}</pre>
                })}
            </div>
        </>
    )
*/

/* //Example 2 for getting the windowWidth
const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    
    const handelResize = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(()=>
    {
        window.addEventListener('resize', handelResize)
        //we should do a clean up when ever this parent function has been deleted 
        // cuz the listener within the useEffect
        // will not deleted and overhead our site
        // so we use the return as unmounting listener 
        // to remove the listener
        return()=>{ //* whenever the use effect run this code will excuted first!
            window.removeEventListener('resize',handelResize)
        }
    },[])


    return (
        <div >{windowWidth}</div> // only updated in refresh !
    )
*/

/*  //Example 2 with calling json from jsonplaceholder website dummy data
const [resourceType, setResourceType] = useState('Posts')
    const [items, setItems] = useState([])
    console.log("render")
    useEffect(() => {
        //fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
         //   .then(response => response.json())
         //   .then(json => setItems(json))
        console.log("resourceType changes")
        //return()=>{ //* whenever the use effect run this code will excuted first!
        //    console.log('return from resource change')
        //}
    }, [resourceType])
    //sending [] - useEffect will called only in amount
    //not sending any - useEffect will called while the function is render
    //sending [var1,var2...] - useEffect will called only if any if the vars changes

    return (
        < >

            <div >
                <button onClick={() => setResourceType('Posts')}>Posts</button>
                <button onClick={() => setResourceType('Users')}>Users</button>
                <button onClick={() => setResourceType('Comments')}>Comments</button>
            </div>
            <div style={{width:'100%' }} >
                <h1>{resourceType}</h1>
                {items.map(items => {
                    return <pre>{JSON.stringify(items)}</pre>
                })}
            </div>
        </>
    ) */