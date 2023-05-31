import React, { useState } from 'react';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight, AiOutlineSearch } from 'react-icons/ai';
import { GrAddCircle } from 'react-icons/gr';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { FcCancel } from 'react-icons/fc';

import { Button, DropDownList } from '~/components';
import { ClassListing } from '~/components/List';

const ClassManage = () => {
    const options = [
        {
            id: '0',
            type: 'option 1',
        },
        {
            id: '1',
            type: 'option 2',
        },
        {
            id: '2',
            type: 'option 3',
        },
    ];
    const [datetime, setDatetime] = useState('');
    function handleChange(e) {
        if (!e.target['validity'].valid) return;
        const dt = e.target['value'] + ':00Z';
        setDatetime(dt);
    }
    return (
        <div className="w-full h-auto flex flex-col">
            <h1 className="w-full h-[50px] pl-4 flex items-center justify-start text-xl font-semibold border-b border-black">
                Class Listing
            </h1>
            <div className="w-full h-full px-4 mt-2">
                <div className="w-full flex">
                    <DropDownList title="Location" options={options} lg />
                    <DropDownList title="Class name" options={options} lg />
                    <DropDownList title="Status" options={options} lg />
                    <Button
                        className="flex gap-1 px-1 py-1 items-center bg-gray-400 border border-black "
                        leftIcon={<AiOutlineSearch size={20} />}
                    >
                        Search
                    </Button>
                </div>
                <div className="w-full h-auto flex gap-40 mt-1">
                    <div className="flex gap-4">
                        <p>From Date</p>
                        <input
                            type="datetime-local"
                            className="border border-black"
                            value={(datetime || '').toString().substring(0, 16)}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex gap-4">
                        <p>To Date</p>
                        <input
                            type="datetime-local"
                            className="border border-black"
                            value={(datetime || '').toString().substring(0, 16)}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="w-full h-[400px] mt-2 border border-black overflow-y-auto">
                    <ClassListing />
                </div>
                <div className="w-full h-[80px] border border-red-500 mt-2 flex flex-col">
                    <div className="flex">
                        <DropDownList title="Page Size" options={options} />
                        <DropDownList title="Page Size" options={options} sm />
                        <div className="flex">
                            <Button className="px-4 bg-gray-400 border border-black">
                                <AiOutlineDoubleLeft />
                            </Button>
                            <Button className="px-2 bg-gray-400 border border-black active:bg-gray-600">1</Button>
                            <Button className="px-2 bg-gray-400 border border-black">2</Button>
                            <Button className="px-4 bg-gray-400 border border-black">
                                <AiOutlineDoubleRight />
                            </Button>
                        </div>
                    </div>
                    <div className="flex gap-4 mt-2">
                        <Button
                            className="flex items-center gap-1 px-1 font-medium border border-black"
                            leftIcon={<GrAddCircle className="text-white bg-green-300 rounded-full" />}
                        >
                            New Class
                        </Button>
                        <Button
                            className="flex items-center gap-1 px-1 font-medium border border-black"
                            leftIcon={<BsFillArrowUpCircleFill />}
                        >
                            Update Class
                        </Button>
                        <Button
                            className="flex items-center gap-1 px-1 font-medium border border-black"
                            leftIcon={<FcCancel />}
                        >
                            Cancel Class
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassManage;
