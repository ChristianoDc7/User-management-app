import React , {FunctionComponent} from 'react';
import { Outlet } from 'react-router-dom';
import PageTransition from '../../styles/PageTransition';
import Unauthorized from '../../component/login/unauthorized';



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

export default ProtectedRoute;