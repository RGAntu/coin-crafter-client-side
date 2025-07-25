import React from 'react';
import useAuth from '../hooks/useAuth';
import useUserRole from '../hooks/useUserRole';

const BuyerRoute = ({ children }) => {
    const { user, loading  } = useAuth();
    const { role, isRoleLoading } = useUserRole();

    if( loading || isRoleLoading  ) {
        return <div><p>loading...</p></div>
    }

    if (!user || role !== 'rider'){
        return <Navigate state={{from: location.pathname}} to='/forbidden'> </Navigate>
    }
    return children;
};

export default BuyerRoute;