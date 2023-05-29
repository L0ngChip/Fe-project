import React, { useState } from 'react';
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import { Button, Footer, Header } from '~/components';

const Login = () => {
    return (
        <>
            <div className="w-full h-screen flex flex-col">
                <Header />
                <div className="w-full h-full flex">
                    <div className="w-[200px] h-full relative bg-gray-300 border-r border-b border-black">
                        <div className="absolute top-0 right-0 p-2 text-blue-500 rounded-md cursor-pointer">
                            <AiOutlineDoubleLeft size={24} />
                        </div>
                    </div>
                    <div className="w-full h-full flex-1">
                        <h1 className="w-full h-[50px] pl-6 flex items-center justify-start text-xl font-semibold border-b border-black">
                            Login
                        </h1>
                        <div className="w-full h-full pl-2">
                            <div className="p-4 flex gap-8 items-center">
                                <div className="flex flex-col gap-4">
                                    <p className="text-lg font-normal">Username</p>
                                    <p className="text-lg font-normal">Password</p>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <input type="text" className="outline-none border border-black" />
                                    <input type="password" className="outline-none border border-black" />
                                </div>
                            </div>
                            <div className="pl-[128px] flex gap-4">
                                <Button className="bg-gray-300 px-5 py-1 rounded-sm border border-black">Login</Button>
                                <Button className="bg-gray-300 px-5 py-1 rounded-sm border border-black">Reset</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Login;
