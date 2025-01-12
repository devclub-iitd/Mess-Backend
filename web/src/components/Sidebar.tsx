import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", path: "/home" },
    { name: "User Management", path: "/user-management" },
    { name: "Meals", path: "/meal" },
    { name: "Consumption", path: "/consumption" },
    { name: "Rebate", path: "/rebate" },
  ];

  

  return (
    <aside className=" m-4 rounded-lg w-64 bg-orange-100 h-screen p-4 flex flex-col">
      <h2 className="text-2xl font-bold mb-6">Mess Management System</h2>
      <nav className="space-y-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg ${
                isActive ? "bg-orange-200 font-semibold" : "hover:bg-orange-50"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
      <div className="mt-auto flex items-center justify-between px-4">
        <button className="bg-white py-2 px-4 rounded-lg shadow hover:bg-gray-100">
          Light
        </button>
        <button className="bg-gray-800 text-white py-2 px-4 rounded-lg shadow hover:bg-gray-700">
          Dark
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
