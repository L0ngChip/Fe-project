import React from 'react';
import { AiFillCaretDown, AiOutlineDoubleLeft } from 'react-icons/ai';
import { RxDotFilled } from 'react-icons/rx';
import Menu from './Menu';
import MenuItem from './MenuItem';
import path from '~/utils/path';

const Sidebar = () => {
    return (
        <>
            <div className="w-[200px] h-full relative flex flex-col bg-gray-300 border-r border-b border-black">
                <div className="w-full h-[30px] flex justify-end p-2 text-blue-500 rounded-md cursor-pointer">
                    <AiOutlineDoubleLeft size={24} />
                </div>
                <div className="w-full h-[15%] mt-6">
                    <div class="w-full pl-2">
                        <label class="block tracking-wide text-sm font-normal mb-2" for="grid-state">
                            Your role now is:
                        </label>
                        <div class="relative pr-3">
                            <select
                                className="block appearance-none w-full bg-white border border-black text-gray-700 py-2 px-2 pr-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-state"
                            >
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </select>
                            <div className="pointer-events-none absolute bg-gray-400 inset-y-0 right-2 flex items-center px-1 border border-black">
                                <AiFillCaretDown size={20} />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Menu>
                        <MenuItem to={path.HOME} icon={<RxDotFilled size={20} />} title="Dashboard" />
                        <MenuItem to={path.CLASS_MANAGE} icon={<RxDotFilled size={20} />} title="Class Management" />
                        <MenuItem
                            to={path.CANDIDATE_MANAGE}
                            icon={<RxDotFilled size={20} />}
                            title="Candidate Management"
                        />
                        <MenuItem
                            to={path.TRAINER_MANAGE}
                            icon={<RxDotFilled size={20} />}
                            title="Trainer Management"
                        />
                        <MenuItem
                            to={path.TRAINEE_MANAGE}
                            icon={<RxDotFilled size={20} />}
                            title="Trainee Management"
                        />
                    </Menu>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
