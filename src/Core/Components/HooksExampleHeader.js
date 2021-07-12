import React from "react";
import Button from '@material-ui/core/Button';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import Switch from '@material-ui/core/Switch';
import {useTheme,useUpdateTheme} from '../Context/ThemeContext'
import { lightTheme, darkTheme } from '../../theme';
export default function HooksExampleHeader() {
    const isDarkTheme = useTheme();
    const setToggleTheme =useUpdateTheme();
    const themeStyles = {
        backgroundColor: isDarkTheme ? '#363537' : '#E2E2E2',
        color: isDarkTheme ? '#FAFAFA' : '#363537',
        toggleBorder: isDarkTheme ? '#6B8096' : '#FFF',
        gradient: isDarkTheme ? 'linear-gradient(#091236, #1E215D)' : 'linear-gradient(#39598A, #79D7ED)',
    }
    return (
        <AppBar position="static" width="100%" style={{ marginBottom: '19px' },themeStyles} color='transparent'>
            <Toolbar>
                <Link to={{ pathname: "/" }}>
                    <Button variant="text" color="primary" >Home</Button>
                </Link>
                <Link to={{ pathname: "/useState" }}>
                    <Button variant="text" color="primary" >useState</Button>
                </Link>
                <Link to={{ pathname: "/useEffect" }}>
                    <Button variant="text" color="primary" >useEffect</Button>
                </Link>
                <Link to={{ pathname: "/useMemo" }}>
                    <Button variant="text" color="primary" >useMemo</Button>
                </Link>
                <Link to={{ pathname: "/useCallback" }}>
                    <Button variant="text" color="primary" >useCallback</Button>
                </Link>
                <Link to={{ pathname: "/useRef" }}>
                    <Button variant="text" color="primary" >useRef</Button>
                </Link>
                <Link to={{ pathname: "/useContext" }}>
                    <Button variant="text" color="primary" >useContext</Button>
                </Link>
                <Link to={{ pathname: "/useReducer" }}>
                    <Button variant="text" color="primary" >useReducer</Button>
                </Link>
                <Link to={{ pathname: "/Custom Hooks" }}>
                    <Button variant="text" color="primary" >Custom Hooks</Button>
                </Link>
                <Switch checked={isDarkTheme} color='secondary' onChange={setToggleTheme} name="gilad" />
            </Toolbar>
        </AppBar>
    );
}