import { Dispatch, SetStateAction } from "react"

export type userType ={
    userName : string ,
    password : string
}

export type AuthContextType = {
    isAuthenticated : boolean , 
    setIsAuthenticated : Dispatch<SetStateAction<boolean>> ,
    setUser : Dispatch<SetStateAction<userType>> ,
    Logout : () => void,
    user : userType
}