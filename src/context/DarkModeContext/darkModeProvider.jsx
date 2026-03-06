import { useLocalStorageState } from "../../hooks/useLocalStorageState";
import { DarkModeContext } from "./DarkModeContext";

export function DarkModeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useLocalStorageState(false, 'isDarkmode');

    function handleToggle() {
        setIsDarkMode(dark => !dark);
    }
    return (
        <DarkModeContext.Provider value={{
            isDarkMode,
            handleDarkMode:handleToggle
        }}>
            {children}
        </DarkModeContext.Provider>
    )
}