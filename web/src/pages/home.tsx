import React from "react";
import { BrowserRouter as  Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Dashboard from "./dashboard";
import UserManagement from "./user_management";
import Meals from "./meal";
import Consumption from "./consumption";
import Rebate from "./rebate";

const Home = () => {
  return (
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/meals" element={<Meals />} />
            <Route path="/consumption" element={<Consumption />} />
            <Route path="/rebate" element={<Rebate />} />
          </Routes>
        </main>
      </div>
  );
};

export default Home;