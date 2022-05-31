import React, {useContext} from 'react';
import './App.css';
import { Routes , Route} from 'react-router-dom';
import Home from './component/home/home';
import About from './component/about/about';
import Count from './component/count/count';
import Users from './component/users/users';
import OgtTable from './component/ogt/ogt-table';
import Navs from './component/navbar/navbar';
import Login from './component/login/login';
import { NotFound } from './component/not found/NotFound';
import { AuthContext } from './services/Auth/Auth-Provider';
import ProtectedRoute from './services/Auth/protectedRoute';
import OgtDashboard from './component/ogt/OgtDashboard';
import Message from './component/message/message';




function App() {
  const {isAuthenticated} = useContext(AuthContext)
  return (
        <div className="App">
            <Navs/>
            <div className='routes'>
                <Routes>
                  <Route path='/' element={<Home />} />
                  //Route Protégé
                  <Route element={<ProtectedRoute isAllowed={isAuthenticated} />}>
                      <Route path='count' element={<Count/>} />
                      <Route path='ogt' element={<OgtTable/>} />
                      <Route path='users' element={<Users />} />
                      <Route path='message' element={<Message />} />
                  </Route>
                  <Route path='dashboard' element={<OgtDashboard />} />
                  <Route path='about' element={<About />} />
                  <Route path='*' element={<NotFound />} />
                  <Route path='login' element={<Login />}></Route>
                </Routes>
            </div>
        </div>
  );
}

export default App;



