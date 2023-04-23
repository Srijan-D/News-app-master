"use client"
import { useTheme } from "next-themes";
import { useState, useEffect } from "react"
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid"

function DarkModeButton() {
    const [mounted, setMounted] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();

    //server does not know the current theme of the user hence it should only run once in the DOM
    useEffect(() => {
        setMounted(true)
    }, [])


    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    return <div>
        {
            currentTheme === 'dark' ? (
                <SunIcon
                    className="h-8 w-8 cursor-pointer text-yellow-500"
                    onClick={() => setTheme('light')} />
            ) : (
                    <MoonIcon
                        className="h-8 w-8 cursor-pointer text-gray-900"
                        onClick={() => setTheme('dark')} />
                )}

    </div>

}

export default DarkModeButton