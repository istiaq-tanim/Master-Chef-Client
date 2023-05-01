import React from 'react';
import Login from '../Pages/Login/Login/Login';
import Header from '../Pages/Shared/Header/Header';

const LoginLayout = () => {
    return (
        <div>
            <Header></Header>
            <Login></Login>
        </div>
    );
};

export default LoginLayout;