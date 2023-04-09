import React from "react";

export const ThemeContext = React.createContext();

export const ThemeArea = ({ children, initialTheme }) => {
    return (
        <ThemeContext.Provider value={initialTheme}>
            {children}
        </ThemeContext.Provider>
    );
};