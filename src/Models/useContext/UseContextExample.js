import React, { useContext } from 'react'
import { ThemeContext } from '../../Core/Components/MainPage'
import { useTheme, useUpdateTheme } from '../../Core/Context/ThemeContext'
import Grid from "@material-ui/core/Grid";

export default function UseContextExample() {
    // const darkTheme = useContext(ThemeContext)
    const isDarkTheme = useTheme();
    const isNotDarkTheme = !isDarkTheme;
    const toggleTheme = useUpdateTheme();
     function themeStyles(darkTheme){
        return {
        backgroundColor: darkTheme ? '#363537' : '#E2E2E2',
        color: darkTheme ? '#FAFAFA' : '#363537',
        toggleBorder: darkTheme ? '#6B8096' : '#FFF',
        gradient: darkTheme ? 'linear-gradient(#091236, #1E215D)' : 'linear-gradient(#39598A, #79D7ED)',
        padding: '3rem'}
    }

    return (
        <Grid direction="column" style={themeStyles(!isDarkTheme)} xs='12' >
            <Grid style={themeStyles(isDarkTheme)}>
                Function Example
            </Grid>
        </Grid>
    )
}