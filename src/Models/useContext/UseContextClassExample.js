import React, { Component, useState, useMemo, useEffect } from "react"
import Grid from "@material-ui/core/Grid";
import { ThemeContext } from '../../Core/Components/MainPage'

export default class UseContextClassExample extends Component {
    themeSyles(dark) {
        return {
            backgroundColor: dark ? '#333' : '#CCC',
            color: dark ? '#CCC' : '#333',
            padding: '2rem',
            margin: '2rem'
        }
    }
    render() {
        return (
            <ThemeContext.Consumer>
                {darkTheme => {
                    console.log(darkTheme)
                    return <div style={this.themeSyles(darkTheme)}>
                        Class Theme </div>
                }
                }
            </ThemeContext.Consumer>
        );
    }

}