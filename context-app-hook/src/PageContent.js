import React, {useContext} from "react";
import { ThemeContext } from "./contexts/ThemeContext"

export default function PageContent(props) {
    const {isDarkTheme} = useContext(ThemeContext);
    const styles= {
        backgroundColor: isDarkTheme? "black": "white",
        height: "100vh",
        width: "100vw"
    }
    return(
        <div style={styles}>
            {props.children}
        </div>
    )
}