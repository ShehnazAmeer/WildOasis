import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";

export function useDarkMode() {
    const context = useContext(DarkModeContext);
    if (context === undefined)
        throw new Error('DarkMode context used outside of its provider');
    return context;
}