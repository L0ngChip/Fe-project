import React from 'react';
import { NavLink } from 'react-router-dom';

const notActiveStyle = 'flex px-2 py-3 gap-[6px] text-sm font-bold items-center text-blue-400';
const activeStyle = 'flex px-2 py-3 gap-[6px] text-sm font-bold items-center text-blue-800';

const MenuItem = ({ icon, to, title }) => {
    return (
        <div className="flex flex-col gap-2 text-blue-500">
            <NavLink className={(nav) => (nav.isActive ? activeStyle : notActiveStyle)} to={to}>
                <span className="w-[20px] h-[20px]">{icon}</span>
                <span className="">{title}</span>
            </NavLink>
        </div>
    );
};

export default MenuItem;
