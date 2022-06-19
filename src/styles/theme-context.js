import React from "react";

export const themes = {
    isTheme: '',

    dark: {
        backgroundColor: '#20212C',
        color: '#fff'
    }, 
    light: {
        backgroundColor: '#F4F7FD',
        color: '#000112'
    },
    subDark: {
        backgroundColor: '#2B2C37',
        color: '#fff'
    },
    subLight: {
        backgroundColor: '#fff',
        color: '#000112'
    }
}


const ThemeContext = React.createContext(themes.light)

export default ThemeContext