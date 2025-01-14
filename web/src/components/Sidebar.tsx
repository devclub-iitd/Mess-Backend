import { NavLink } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

const Sidebar = () => {
  const { theme, toggleTheme } = useTheme();
  const menuItems = [
    { name: "Dashboard", path: "/home" },
    { name: "User Management", path: "/user-management" },
    { name: "Meals", path: "/meal" },
    { name: "Consumption", path: "/consumption" },
    { name: "Rebate", path: "/rebate" },
  ];

  return (
    <aside className="h-full rounded-lg w-64 p-4 flex flex-col
                      bg-orange-100 dark:bg-gray-800 
                      text-gray-800 dark:text-gray-200">
      <h2 className="text-2xl font-bold mb-6">Mess Management System</h2>
      <nav className="space-y-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg ${
                isActive 
                  ? "bg-orange-200 dark:bg-gray-700 font-semibold" 
                  : "hover:bg-orange-50 dark:hover:bg-gray-700"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
      <div className="mt-auto flex items-center gap-2 px-4">
        <button 
          onClick={() => theme === 'dark' && toggleTheme()}
          className={`flex-1 py-2 px-4 rounded-lg flex items-center justify-center gap-2
            ${theme === 'light' 
              ? 'bg-orange-200 text-gray-800' 
              : 'bg-white/10 text-gray-400 hover:bg-white/20'
            }`}
        >
          <IoSunnyOutline className="text-lg" />
          Light
        </button>
        
        <button 
          onClick={() => theme === 'light' && toggleTheme()}
          className={`flex-1 py-2 px-4 rounded-lg flex items-center justify-center gap-2
            ${theme === 'dark' 
              ? 'bg-gray-700 text-gray-200' 
              : 'bg-gray-200/50 text-gray-600 hover:bg-gray-200'
            }`}
        >
          <IoMoonOutline className="text-lg" />
          Dark
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
