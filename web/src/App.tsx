// import { Button } from './components/ui/button'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home.tsx';
import Login from './pages/login.tsx';
// import Dashboard from './pages/dashboard.tsx';
// import UserManagement from './pages/user_management.tsx';
// import Meal from './pages/meal.tsx';
// import Rebate from './pages/rebate.tsx';
// import Consumption from './pages/consumption.tsx';

function App() {
  // return (
  //  <Button size={"lg"}>Hello</Button>
  // )
  
  return(
    <Router>
      <div className='App'>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
  
}

export default App



