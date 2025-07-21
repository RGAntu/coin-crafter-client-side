import React from 'react';
import CoinCrafterLogo from '../pages/shared/CoinCrafterLogo/CoinCrafterLogo';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className="p-12 bg-base-200">
        <div>
            <CoinCrafterLogo></CoinCrafterLogo>
        </div>
      <Outlet></Outlet>
    </div>
    );
};

export default AuthLayout;