import React, { FunctionComponent, useEffect, useState } from 'react';
import './App.css';
import { Routes , Route,  Outlet, useNavigate} from 'react-router-dom';
import Home from './component/home/home';
import About from './component/about/about';
import Count from './component/count/count';
import Users from './component/users/users';
import OgtTable from './component/ogt/ogt-table';
import Navs from './component/navbar/navbar';
import Login from './component/login/login';
import { NotFound } from './component/not found/NotFound';
import Unauthorized from './component/login/unauthorized';



function App() {
  const [user , setUser ] = useState<any>({
    userName :'',
    password :''
  })
  const {userName , password } = user;

  const navigate = useNavigate()
  const [isAuth , setAuth] = useState<boolean>(false) 
  useEffect(()=>{
    if(userName == 'tino' && password == 'tino'){
      setAuth(true)
    }else {
      setAuth(false)
    }
    console.log(user)
  },[user])

  
  const Logout = () => {
    setUser({
      name : '', 
      password : ''
    }) 
    navigate('/')
  }
  
  return (
    <div className="App">
       <Navs/>
       {
         isAuth ? (<button onClick={Logout}>Logout</button>) 
         : ('')
       }
       <div className='routes'>
          <Routes>
            <Route path='/' element={<Home isAuth={isAuth}/>} />
            //Route Protégé
            <Route element={<ProtectedRoute isAllowed={isAuth} />}>
                <Route path='count' element={<Count/>} />
                <Route path='ogt' element={<OgtTable/>} />
                <Route path='users' element={<Users />} />
            </Route>
            <Route path='about' element={<About />} />
            <Route path='*' element={<NotFound />} />
            <Route path='login' element={<Login setUser={setUser} user={user}/>}></Route>
          </Routes>
        </div>
    </div>
  );
}

export default App;



//protected Routes
type ProtectedProp = {
  isAllowed : boolean
}
const ProtectedRoute : FunctionComponent<ProtectedProp> = ({isAllowed}) =>
{
  if(!isAllowed){
    return <Unauthorized />
  }
  return <Outlet/>
}