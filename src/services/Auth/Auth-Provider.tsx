import { createContext, Dispatch, FunctionComponent, SetStateAction, useState } from "react";

type ProviderPorps = {
   
    
}
export const AuthContext = createContext<ProviderPorps | null >(null);

type Authprops = {
    children : any
}

export const AuthProvider : FunctionComponent<Authprops> = ({ children }) => {
    const [auth, setAuth] = useState<boolean>(false);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;