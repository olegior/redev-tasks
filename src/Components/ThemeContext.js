import { createContext, useState } from 'react'
export const Theme = createContext('light');

export const ThemeContext = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const handleSwitchTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    }
    return (
        <Theme.Provider value={{theme,handleSwitchTheme}}>
            {children}
        </Theme.Provider>
    )
}




