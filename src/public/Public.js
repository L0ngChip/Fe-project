import React from 'react';
import Scrollbars from 'react-custom-scrollbars-2';
import { Outlet } from 'react-router-dom';
import { Footer, Header, Sidebar } from '~/components';

const Public = () => {
    return (
        <div className="w-full h-screen flex flex-col">
            <div>
                <Header />
            </div>
            <div className="w-full h-full flex flex-auto">
                <div className="w-full flex-1">
                    <Sidebar />
                </div>
                <div className="w-full flex-auto">
                    <Scrollbars autoHide style={{ width: '100%', height: '100%' }}>
                        <Outlet />
                    </Scrollbars>
                </div>
            </div>
            <div className="w-full h-auto">
                <Footer />
            </div>
        </div>
    );
};

export default Public;
