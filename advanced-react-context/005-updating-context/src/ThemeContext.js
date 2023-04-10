import React, {useMemo, useState} from "react";

export const ThemeContext = React.createContext();

export const ThemeArea = ({ children, initialTheme }) => {
    
    const [theme, setTheme] = useState(initialTheme);

    const memo = useMemo(() =>
        (() =>
            ({theme, setTheme})), [theme])

    return (
        <ThemeContext.Provider value={memo}>
            {children}
        </ThemeContext.Provider>
    );
};