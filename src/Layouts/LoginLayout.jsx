import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';

const LoginLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className='min-h[calc(100vh-276px)]'><Outlet></Outlet></div>
        </div>
    );
};

export default LoginLayout;