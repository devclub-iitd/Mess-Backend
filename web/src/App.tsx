import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Login from "./pages/login";
import Dashboard from "./pages//dashboard";
import UserManagement from "./pages/user_management";
import Meal from "./pages/meal";
import Consumption from "./pages/consumption";
import Rebate from "./pages/rebate";

function App() {
  // return (
  //  <Button size={"lg"}>Hello</Button>
  // )
  
  return(
    <Router>
      <div style={{ display: "flex" }}>
        <SidebarWrapper />
        {/* Main content */}
        <div style={{ flex: 1}}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/meal" element={<Meal />} />
            <Route path="/consumption" element={<Consumption />} />
            <Route path="/rebate" element={<Rebate />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
  
}

const SidebarWrapper = () => {
  const location = useLocation();
  const hideSidebarRoutes = ["/"]; // Routes where the sidebar is hidden
  const showSidebar = !hideSidebarRoutes.includes(location.pathname);

  return showSidebar ? <Sidebar /> : null;
};

export default App



