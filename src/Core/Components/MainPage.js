import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from 'react-bootstrap';
import { Switch, Route, Redirect } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import HooksExampleHeader from "./HooksExampleHeader"
import HooksIntroPage from "../../Models/HooksIntroducation/HooksIntroPage";
import UseStateExample from "../../Models/useState/UseStateExample";
import UseEffectExample from "../../Models/useEffect/UseEffectExample";
import UseMemoExample from "../../Models/useMemo/UseMemoExample";
import UseRefExample from "../../Models/useRef/UseRefExample";
import UseReducerExample from "../../Models/useReducer/UseReducerExample";
import UseContextClassExample from "../../Models/useContext/UseContextClassExample";
import UseContextExample from "../../Models/useContext/UseContextExample";
import UseCallbackExample from "../../Models/useCallback/UseCallbackExample";
import CustomExample from "../../Models/Custom Hooks/CustomExample";
import { ThemeProvider } from '../Context/ThemeContext';

import { GlobalStyles } from '../../global';
export const ThemeContext = React.createContext();

export default function MainPage() {
    const useStyles = makeStyles(() => ({
        root: {
            flexGrow: 1
        }, paper: {
            alignItems: 'center',
        },
        upperMenue: {
            paddingRight: 0,
            paddingLeft: 0,
            maxWidth: 'none'
        }
    }));

    /* const [darkTheme, setDarkTheme] = useState(true)

    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    } */

    const classes = useStyles();

    return (
        <ThemeProvider>
                {/* <ThemeContext.Provider value={darkTheme} > */}
                <React.Fragment >
                    <Container id="headerContainer" className={classes.upperMenue} >
                        <HooksExampleHeader />
                    </Container>
                    <Grid container justify="center" alignItems="center" style={{ height: '300px', textAlign: 'center' }}>
                        <Switch>
                            <Route exact path='/' component={HooksIntroPage} />
                            <Route exact path='/useState' component={UseStateExample} />
                            <Route exact path='/useEffect' component={UseEffectExample} />
                            <Route exact path='/useMemo' component={UseMemoExample} />
                            <Route exact path='/useRef' component={UseRefExample} />
                            <Route exact path='/useReducer' component={UseReducerExample} />
                            <Route exact path='/useContext' >
                                <br />
                                {/*
                             <button onClick={toggleTheme} name="gilad" >toggleTheme</button>
                             <UseContextClassExample /> 
                             */}
                                <UseContextExample />
                            </Route>
                            <Route exact path='/useCallback' component={UseCallbackExample} />
                            <Route exact path='/Custom Hooks' component={CustomExample} />
                            <Route render={() => <Redirect to="/" />} />
                        </Switch>
                    </Grid>
                </React.Fragment>
                {/* </ThemeContext.Provider> */}
        </ThemeProvider>

    );
}