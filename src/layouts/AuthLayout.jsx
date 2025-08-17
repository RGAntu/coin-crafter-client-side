import React from 'react';
import CoinCrafterLogo from '../pages/shared/CoinCrafterLogo/CoinCrafterLogo';
import { Link, Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className="p-12 bg-base-200">
        <div className='flex items-center'>
            <div>

            <CoinCrafterLogo></CoinCrafterLogo>
            </div>
            <div>
                <Link to="/">
                <p className='text-xl text-accent font-bold md:hidden lg:hidden'>CoinCrafter</p>
                </Link>
            </div>
            
        </div>
      <Outlet></Outlet>
    </div>
    );
};

export default AuthLayout;