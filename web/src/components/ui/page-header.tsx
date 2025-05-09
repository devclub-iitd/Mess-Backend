import React from 'react'
import { Button } from "./button"
import { ThemeToggle } from "./theme-toggle"
import { IoIosNotifications } from "react-icons/io"

interface PageHeaderProps {
  title: string
  subtitle?: string
  showNotification?: boolean
}

export function PageHeader({ title, subtitle, showNotification = true }: PageHeaderProps) {
  return (
    <header className="flex justify-between items-center p-6">
      <div>
        <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">{title}</h1>
        {subtitle && (
          <span className="text-slate-500 dark:text-slate-400">{subtitle}</span>
        )}
      </div>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        {showNotification && (
          <Button variant="ghost" size="icon">
            <IoIosNotifications className="h-5 w-5" />
          </Button>
        )}
      </div>
    </header>
  )
} 