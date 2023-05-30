import React from 'react';
import Scrollbars from 'react-custom-scrollbars-2';

const DashboardList = ({ title }) => {
    return (
        <>
            <div className="w-full h-full flex flex-col items-center">
                <h1 className="my-5 text-lg text-center">{title}</h1>
                <div className="w-[303px] h-[300px] border-[2px] border-black">
                    <Scrollbars autoHide style={{ width: 300, height: 300 }}>
                        <div class="relative overflow-y-auto overflow-x-hidden">
                            <table class="w-full h-full text-sm text-left text-gray-500">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-400">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Skill
                                        </th>

                                        <th scope="col" class="px-6 py-3">
                                            Plan of enrolment
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr class="bg-gray-200">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            .NET
                                        </th>
                                        <td class="px-6 py-4">130</td>
                                    </tr>
                                    <tr class="bg-white">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Android
                                        </th>
                                        <td class="px-6 py-4">20</td>
                                    </tr>
                                    <tr class="bg-gray-200">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            C/C++
                                        </th>
                                        <td class="px-6 py-4">47</td>
                                    </tr>
                                    <tr class="bg-white">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Front-end
                                        </th>
                                        <td class="px-6 py-4">19</td>
                                    </tr>
                                    <tr class="bg-gray-200">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Java
                                        </th>
                                        <td class="px-6 py-4">40</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr class="font-semibold text-gray-900">
                                        <th scope="row" class="px-6 py-3 text-base">
                                            Total
                                        </th>
                                        <td class="px-6 py-3">256</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </Scrollbars>
                </div>
            </div>
        </>
    );
};

export default DashboardList;
