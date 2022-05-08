import { createContext, FunctionComponent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userType , AuthContextType } from "./context-type";

 
export const AuthContext = createContext<AuthContextType>({
  isAuthenticated : false ,
  setIsAuthenticated : (e)=>e = e ,
  setUser : (e)=> e = e ,
  Logout : ()=>{},
  user : {
    userName : '' , 
    password : ''
  }
});

const AuthProvider : FunctionComponent = ({ children }) => {

    const authkey = 'auth';

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    
    const [user , setUser ] = useState<userType>({
        userName :'',
        password :''
      })
    
    const {userName , password } = user;

    const navigate = useNavigate()
    
    const Logout = () => {
        setUser({
          userName : '', 
          password : ''
        }) 
        localStorage.removeItem(authkey)
        navigate('/')
      }

    

    useEffect(()=>{
      
      const auth = localStorage.getItem(authkey)
        if(auth){
          setIsAuthenticated(JSON.parse(auth))
          console.log(auth)
        }
         else if(!auth && userName == 'tino' && password == 'tino')
        {
          setIsAuthenticated(true)
          localStorage.setItem(authkey, JSON.stringify(true))
        } 
          else 
        {
          setIsAuthenticated(false)
        }
      },[user])

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated , user , setUser , Logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;