import React from 'react';

const ClassListing = () => {
    return (
        <>
            <div class="relative shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 ">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" class="p-4">
                                <div class="flex items-center">
                                    <input
                                        id="checkbox-all"
                                        type="checkbox"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                    />
                                    <label for="checkbox-all" class="sr-only">
                                        checkbox
                                    </label>
                                </div>
                            </th>
                            <th scope="col" class="px-6 py-3">
                                #
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Class Code
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Class Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Actual Start Date
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Actual End Date
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Location
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b hover:bg-gray-50">
                            <td class="w-4 p-4">
                                <div class="flex items-center">
                                    <input
                                        id="checkbox-table-1"
                                        type="checkbox"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                    />
                                    <label for="checkbox-table-1" class="sr-only">
                                        checkbox
                                    </label>
                                </div>
                            </td>
                            <td class="px-6 py-4">1</td>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                HN_FR_Java_18_01
                            </th>
                            <td class="px-6 py-4">Fresher Developer Java</td>
                            <td class="px-6 py-4">30-Jan-2018</td>
                            <td class="px-6 py-4">01-Mar-2018</td>
                            <td class="px-6 py-4">Hoà Lạc</td>
                            <td class="px-6 py-4">Planned</td>
                        </tr>
                        <tr class="bg-white border-b hover:bg-gray-50">
                            <td class="w-4 p-4">
                                <div class="flex items-center">
                                    <input
                                        id="checkbox-table-1"
                                        type="checkbox"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                    />
                                    <label for="checkbox-table-1" class="sr-only">
                                        checkbox
                                    </label>
                                </div>
                            </td>
                            <td class="px-6 py-4">1</td>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                HN_FR_Java_18_01
                            </th>
                            <td class="px-6 py-4">Fresher Developer Java</td>
                            <td class="px-6 py-4">30-Jan-2018</td>
                            <td class="px-6 py-4">01-Mar-2018</td>
                            <td class="px-6 py-4">Hoà Lạc</td>
                            <td class="px-6 py-4">Planned</td>
                        </tr>
                        <tr class="bg-white border-b hover:bg-gray-50">
                            <td class="w-4 p-4">
                                <div class="flex items-center">
                                    <input
                                        id="checkbox-table-1"
                                        type="checkbox"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                    />
                                    <label for="checkbox-table-1" class="sr-only">
                                        checkbox
                                    </label>
                                </div>
                            </td>
                            <td class="px-6 py-4">1</td>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                HN_FR_Java_18_01
                            </th>
                            <td class="px-6 py-4">Fresher Developer Java</td>
                            <td class="px-6 py-4">30-Jan-2018</td>
                            <td class="px-6 py-4">01-Mar-2018</td>
                            <td class="px-6 py-4">Hoà Lạc</td>
                            <td class="px-6 py-4">Planned</td>
                        </tr>
                        <tr class="bg-white border-b hover:bg-gray-50">
                            <td class="w-4 p-4">
                                <div class="flex items-center">
                                    <input
                                        id="checkbox-table-1"
                                        type="checkbox"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                    />
                                    <label for="checkbox-table-1" class="sr-only">
                                        checkbox
                                    </label>
                                </div>
                            </td>
                            <td class="px-6 py-4">1</td>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                HN_FR_Java_18_01
                            </th>
                            <td class="px-6 py-4">Fresher Developer Java</td>
                            <td class="px-6 py-4">30-Jan-2018</td>
                            <td class="px-6 py-4">01-Mar-2018</td>
                            <td class="px-6 py-4">Hoà Lạc</td>
                            <td class="px-6 py-4">Planned</td>
                        </tr>
                        <tr class="bg-white border-b hover:bg-gray-50">
                            <td class="w-4 p-4">
                                <div class="flex items-center">
                                    <input
                                        id="checkbox-table-1"
                                        type="checkbox"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                    />
                                    <label for="checkbox-table-1" class="sr-only">
                                        checkbox
                                    </label>
                                </div>
                            </td>
                            <td class="px-6 py-4">1</td>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                HN_FR_Java_18_01
                            </th>
                            <td class="px-6 py-4">Fresher Developer Java</td>
                            <td class="px-6 py-4">30-Jan-2018</td>
                            <td class="px-6 py-4">01-Mar-2018</td>
                            <td class="px-6 py-4">Hoà Lạc</td>
                            <td class="px-6 py-4">Planned</td>
                        </tr>
                        <tr class="bg-white border-b hover:bg-gray-50">
                            <td class="w-4 p-4">
                                <div class="flex items-center">
                                    <input
                                        id="checkbox-table-1"
                                        type="checkbox"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                    />
                                    <label for="checkbox-table-1" class="sr-only">
                                        checkbox
                                    </label>
                                </div>
                            </td>
                            <td class="px-6 py-4">1</td>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                HN_FR_Java_18_01
                            </th>
                            <td class="px-6 py-4">Fresher Developer Java</td>
                            <td class="px-6 py-4">30-Jan-2018</td>
                            <td class="px-6 py-4">01-Mar-2018</td>
                            <td class="px-6 py-4">Hoà Lạc</td>
                            <td class="px-6 py-4">Planned</td>
                        </tr>
                        <tr class="bg-white border-b hover:bg-gray-50">
                            <td class="w-4 p-4">
                                <div class="flex items-center">
                                    <input
                                        id="checkbox-table-1"
                                        type="checkbox"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                    />
                                    <label for="checkbox-table-1" class="sr-only">
                                        checkbox
                                    </label>
                                </div>
                            </td>
                            <td class="px-6 py-4">1</td>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                HN_FR_Java_18_01
                            </th>
                            <td class="px-6 py-4">Fresher Developer Java</td>
                            <td class="px-6 py-4">30-Jan-2018</td>
                            <td class="px-6 py-4">01-Mar-2018</td>
                            <td class="px-6 py-4">Hoà Lạc</td>
                            <td class="px-6 py-4">Planned</td>
                        </tr>
                        <tr class="bg-white border-b hover:bg-gray-50">
                            <td class="w-4 p-4">
                                <div class="flex items-center">
                                    <input
                                        id="checkbox-table-1"
                                        type="checkbox"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                    />
                                    <label for="checkbox-table-1" class="sr-only">
                                        checkbox
                                    </label>
                                </div>
                            </td>
                            <td class="px-6 py-4">1</td>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                HN_FR_Java_18_01
                            </th>
                            <td class="px-6 py-4">Fresher Developer Java</td>
                            <td class="px-6 py-4">30-Jan-2018</td>
                            <td class="px-6 py-4">01-Mar-2018</td>
                            <td class="px-6 py-4">Hoà Lạc</td>
                            <td class="px-6 py-4">Planned</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ClassListing;
