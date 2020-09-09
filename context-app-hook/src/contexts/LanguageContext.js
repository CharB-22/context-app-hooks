import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

export function LanguageProvider(props) {
    const [language, setState] = useState("spanish")
    const changeLanguage = e => setState(e.target.value);

    return(
        <LanguageContext.Provider value={{language, changeLanguage}}>
            {props.children}
        </LanguageContext.Provider>
    )
    
}
