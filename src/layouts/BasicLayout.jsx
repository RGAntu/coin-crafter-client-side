import React from 'react';
import Navbar from '../pages/shared/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../pages/shared/Footer/Footer';

const BasicLayout = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            </div>
            <div>
            <Outlet></Outlet>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default BasicLayout;