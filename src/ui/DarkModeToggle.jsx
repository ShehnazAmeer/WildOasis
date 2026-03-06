import { useEffect, useState } from "react";
import Button from "./Button";
import { HiMoon, HiSun } from "react-icons/hi2";
import { useDarkMode } from "../context/DarkModeContext/useDarkModeContext";


export default function DarkModeToggle() {
    const { isDarkMode, handleDarkMode} = useDarkMode();
    console.log(isDarkMode);
    
    useEffect(function () {
        const el = document.documentElement;
        if (isDarkMode)
            el?.classList.add('dark');
        else
            el?.classList.remove('dark');
    },[isDarkMode])


    return (
        <div className="border border-gray-50 dark:border-gray-500 w-80 flex justify-center items-center p-5 rounded-full opacity-80 fixed top-10 right-35 dark:bg-gray-700">
            <Button
                styles="text-6xl text-amber-400 "
                category='custom '
                onClick={handleDarkMode}  
             >
                {
                    <HiSun/>
                // darkModeToggle? <HiMoon />: <HiSun/>
            }
          </Button>
        </div>

    ) 
}