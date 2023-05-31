import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

const DropDownList = ({ title, options, sm, lg }) => {
    console.log(options);
    return (
        <div className="w-full h-auto">
            <div class="flex items-center gap-4">
                <label class="block tracking-wide text-base font-medium" for="grid-state">
                    {title}
                </label>
                <div class="relative pr-3">
                    <select
                        className={`block appearance-none ${
                            sm ? 'w-[100px]' : lg ? 'w-[150px]' : 'w-full'
                        } bg-white border border-black text-gray-700 py-1 px-[2px] pr-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                        id="grid-state"
                    >
                        {options.map((item) => (
                            <option key={item?.id}>{item?.type}</option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute bg-gray-400 inset-y-0 right-2 flex items-center px-1 border border-black">
                        <AiFillCaretDown size={20} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DropDownList;
