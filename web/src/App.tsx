import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { Sidebar } from "./components/ui/sidebar";
import Login from "./pages/login";
import Dashboard from "./pages//dashboard";
import UserManagement from "./pages/user_management";
import Meal from "./pages/meal";
import Consumption from "./pages/consumption";
import Rebate from "./pages/rebate";
import { UserProvider, useUser } from "./context/UserContext";

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/" element={
                <ProtectedRoutes />
              } >
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/user-management" element={<UserManagement />} />
              <Route path="/meal" element={<Meal />} />
              <Route path="/consumption" element={<Consumption />} />
              <Route path="/rebate" element={<Rebate />} />
            </Route>
          </Routes>
        </Router>
      </UserProvider>
    </ThemeProvider>
  );
}

const ProtectedRoutes = () => {
  const {user} = useUser();
  if (!user) {
    return <Navigate to="/" />;
  }
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar />
      <main className="flex-1 min-w-0 overflow-auto p-8">
        <>
          <Outlet/>
        </>
      </main>
    </div>
  );
};

export default App;



