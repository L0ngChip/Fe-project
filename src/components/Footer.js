import React from 'react';
import { MdOutlineHelp, MdAndroid } from 'react-icons/md';

const Footer = () => {
    return (
        <div className="w-full h-[58px] flex bg-gray-300 border text-sm text-blue-600 border-black">
            <div className="w-[200px] h-full "></div>
            <div className="flex items-center gap-8">
                <div className="flex gap-1 ml-1 items-center cursor-pointer">
                    <div className="w-[24px] h-[24px] bg-white rounded-full flex items-center justify-center border border-blue-500">
                        <MdOutlineHelp className="text-blue-500" size={20} />
                    </div>
                    <p>Help</p>
                </div>
                <div className="flex items-center cursor-pointer">
                    <MdAndroid className="text-gray-600" size={20} />
                    <p>Create ticket on F12.0</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
