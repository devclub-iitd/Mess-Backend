import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Sidebar from "./components/Sidebar";
import Login from "./pages/login";
import Dashboard from "./pages//dashboard";
import UserManagement from "./pages/user_management";
import Meal from "./pages/meal";
import Consumption from "./pages/consumption";
import Rebate from "./pages/rebate";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/*" element={
          <ThemeProvider>
            <ProtectedRoutes />
          </ThemeProvider>
        } />
      </Routes>
    </Router>
  );
}

const ProtectedRoutes = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/meal" element={<Meal />} />
          <Route path="/consumption" element={<Consumption />} />
          <Route path="/rebate" element={<Rebate />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;



