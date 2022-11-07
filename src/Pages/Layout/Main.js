import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Common/Footer';
import Header from '../Common/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;