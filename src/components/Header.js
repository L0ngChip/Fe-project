import React from 'react';
import { Link } from 'react-router-dom';
import images from '~/assets';
import path from '~/utils/path';

const Header = () => {
    return (
        <div className="w-full h-[70px] bg-[#000080] flex items-center">
            <img className="w-[150px] h-[60px] object-contain" src={images.logo} alt="logo" />
            <div className="w-full h-full text-white flex items-center justify-between">
                <h1 className="ml-[100px] text-2xl font-bold">FSOFT HR UTILITY</h1>
                <Link to={path.LOGIN}>
                    <button className="mr-6 p-2 rounded-lg border border-gray-300">Login</button>
                </Link>
            </div>
        </div>
    );
};

export default Header;
