import React, { createContext } from "react";
import useToggle from "../hooks/useToggle";


export const ThemeContext = createContext();

export function ThemeProvider(props) {

    const [isDarkTheme, toggleTheme] = useToggle(false)

        return(
        <ThemeContext.Provider value={{isDarkTheme, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
        )
}