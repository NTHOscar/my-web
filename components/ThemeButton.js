'use client'

import { useState, useEffect } from "react";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { useTheme } from 'next-themes'

export const ThemeButton = () => {
    // const [theme, setTheme] = useState("light");

    // const toggleTheme = () => {
    //   if (theme === "light") {
    //     setTheme("dark");
    //     window.localStorage.setItem("theme", "dark");
    //     document.documentElement.classList.add("dark");
    //   } else {
    //     setTheme("light");
    //     window.localStorage.setItem("theme", "light");
    //     document.documentElement.classList.remove("dark");
    //   }
    // };
  
    // useEffect(() => {
    //   const localTheme = window.localStorage.getItem("theme");
    //   if (localTheme) {
    //     setTheme(localTheme);
    //     if (localTheme === "dark") {
    //       document.documentElement.classList.add("dark");
    //     }
    //   } else if (window.matchMedia("(prefers-colors-scheme: dark)").matches) {
    //     setTheme("dark");
    //     document.documentElement.classList.add("dark");
    //   }
    // }, []);
    
    //use next theme
    const { theme, setTheme } = useTheme(); //hook
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
      setMounted(true)
    }, [])
  
    if (!mounted) {
      return null
    }
    
  return (
    // <button onClick={toggleTheme} className="bg-opacity-80 ">
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? <BsSunFill /> : <BsMoonStarsFill />}
    </button>

  )
}