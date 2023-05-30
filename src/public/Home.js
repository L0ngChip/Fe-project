import React from 'react';
import { DropDownList } from '~/components';
import { DashboardList } from '~/components/List';

const Home = () => {
    const options = [
        {
            id: '0',
            type: 'Option 1',
        },
        {
            id: '1',
            type: 'Option 2',
        },
        {
            id: '2',
            type: 'Option 3',
        },
        {
            id: '3',
            type: 'Option 4',
        },
    ];
    return (
        <div className="w-full h-auto flex flex-col">
            <h1 className="w-full h-[50px] pl-4 flex items-center justify-start text-xl font-semibold border-b border-black">
                Dashboard
            </h1>
            <div className="w-full h-[15%] flex px-6 py-8 gap-6 border-b border-black">
                <DropDownList title="Dash for" sm options={options} />
                <DropDownList title="Location" sm options={options} />
                <DropDownList title="Type of Dashboard" sm options={options} />
                <DropDownList title="Status" sm options={options} />
            </div>
            <div className="w-full flex flex-col">
                <div className="w-full h-[30px]"></div>
                <div className="flex gap-4">
                    <DashboardList title="Planning" />
                    <DashboardList title="Planned" />
                    <DashboardList title="In progress" />
                </div>
            </div>
        </div>
    );
};

export default Home;
