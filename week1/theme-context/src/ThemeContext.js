import React, {useContext, useState} from 'react'

const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()

export function useTheme(){ 
    return useContext(ThemeContext) // Uses Theme ----- Hook
}

export function useThemeUpdate(){
    return useContext(ThemeUpdateContext) // Updates The Theme ---- Custom
}

export function ThemeProvider ({children}) {
    const [darkTheme, SetDarkTheme] = useState(true) // Creating State 
    const toggleTheme = () => SetDarkTheme(prevDarkTheme => !prevDarkTheme)  // Updates State

    return (
        <ThemeContext.Provider value={darkTheme}> {/* Passed Down to Children */}
            <ThemeUpdateContext.Provider value={toggleTheme}> {/* Passed Down to Children */}
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}