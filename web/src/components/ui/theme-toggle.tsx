import React from 'react'
import { Button } from "./button"
import { useTheme } from "../../context/ThemeContext"
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full"
    >
      {theme === 'light' ? (
        <IoMoonOutline className="h-5 w-5" />
      ) : (
        <IoSunnyOutline className="h-5 w-5" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
} 