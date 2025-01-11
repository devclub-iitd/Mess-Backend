import { Button } from './components/ui/button'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home.tsx';
import Dashboard from './pages/dashboard.tsx';
import UserManagement from './pages/user_management.tsx';
import Meal from './pages/meal.tsx';
import Rebate from './pages/rebate.tsx';
import Consumption from './pages/consumption.tsx';

function App() {
  // return (
  //  <Button size={"lg"}>Hello</Button>
  // )
  <div className='App'>
		<Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
		    <Route path='/usermanagement' element={<UserManagement />} />
        <Route path='/meal' element={<Meal />} />
        <Route path='/rebate' element={<Rebate />} />
        <Route path='/consumption' element={<Consumption />} />
    </Routes>
		</div>
}

export default App
