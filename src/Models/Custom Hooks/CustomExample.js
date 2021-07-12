import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import useLocalStorage from "./useLocalStorage";
import useUpdateLogger from "./useUpdateLogger";
export default function CustomExample(){
    const [name, setName] = useLocalStorage('name','')
    useUpdateLogger(name)
    return(
        <Grid container direction="column" justify="center" alignItems="center">
        <input type="text" value={name} onChange={e=> setName(e.target.value)}/>
        </Grid>
    );
}