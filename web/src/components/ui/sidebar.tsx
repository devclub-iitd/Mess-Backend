import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { NavLink } from "react-router-dom"
import { useTheme } from "@/context/ThemeContext"
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5"
import { Sheet, SheetContent, SheetTrigger } from "./sheet"
import { Menu, ChevronRight, LayoutDashboard, Users, UtensilsCrossed, BookOpen, FileSpreadsheet } from "lucide-react"
import { useState } from "react"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

interface NavItem {
  title: string;
  icon: React.ReactNode;
  path: string;
}

const SidebarNav = ({ items, className }: { items: NavItem[]; className?: string }) => {
  return (
    <div className="flex-1">
      <nav className="grid gap-2 px-4 py-4">
        {items.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-base transition-colors",
                isActive 
                  ? "bg-orange-200 dark:bg-gray-700 font-semibold" 
                  : "hover:bg-orange-50 dark:hover:bg-gray-700"
              )
            }
          >
            {item.icon}
            <span>{item.title}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  )
}

const SidebarContent = ({ className }: { className?: string }) => {
  const { theme, toggleTheme } = useTheme()
  
  const navItems = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard className="h-4 w-4" />,
      path: "/home"
    },
    {
      title: "User Management",
      icon: <Users className="h-4 w-4" />,
      path: "/user-management"
    },
    {
      title: "Meals",
      icon: <UtensilsCrossed className="h-4 w-4" />,
      path: "/meal"
    },
    {
      title: "Consumption",
      icon: <BookOpen className="h-4 w-4" />,
      path: "/consumption"
    },
    {
      title: "Rebate",
      icon: <FileSpreadsheet className="h-4 w-4" />,
      path: "/rebate"
    }
  ]

  return (
    <div className={cn("h-full flex flex-col", className)}>
      <div className="flex items-center px-6 py-6">
        <h2 className="text-3xl font-bold">
          Mess Management System
        </h2>
      </div>

      <SidebarNav items={navItems} />

      <div className="p-6">
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost"
            onClick={() => theme === 'dark' && toggleTheme()}
            className={cn(
              "flex-1 justify-start py-6 text-base",
              theme === 'light' 
                ? 'bg-orange-200 text-gray-800' 
                : 'bg-white/10 text-gray-400 hover:bg-white/20'
            )}
          >
            <IoSunnyOutline className="h-5 w-5 mr-3" />
            Light
          </Button>
          
          <Button 
            variant="ghost"
            onClick={() => theme === 'light' && toggleTheme()}
            className={cn(
              "flex-1 justify-start py-6 text-base",
              theme === 'dark' 
                ? 'bg-gray-700 text-gray-200' 
                : 'bg-gray-200/50 text-gray-600 hover:bg-gray-200'
            )}
          >
            <IoMoonOutline className="h-5 w-5 mr-3" />
            Dark
          </Button>
        </div>
      </div>
    </div>
  )
}

export function Sidebar({ className }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden lg:block relative">
        <aside className={cn(
          "h-full flex-col border-r bg-orange-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-all duration-300",
          isCollapsed ? "w-0" : "w-[280px]",
          className
        )}>
          <div className={cn(
            "h-full transition-all duration-300",
            isCollapsed ? "opacity-0 w-0" : "opacity-100 w-[280px]"
          )}>
            <SidebarContent />
          </div>
        </aside>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={cn(
            "absolute top-4 z-50 hover:bg-accent transition-all duration-300",
            isCollapsed ? "left-4" : "left-[260px]"
          )}
        >
          <ChevronRight 
            className={cn(
              "h-4 w-4 transition-transform",
              !isCollapsed && "rotate-180"
            )}
          />
        </Button>
      </div>

      {/* Mobile sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden fixed left-4 top-4 z-40"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[280px] bg-orange-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-0">
          <SidebarContent />
        </SheetContent>
      </Sheet>
    </>
  )
} 