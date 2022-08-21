import type { NextPage } from 'next';
import Head from 'next/head';

import DashboardLayout from '@/screens/layout/layout';

const PlacesPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Vaccination Management</title>
            </Head>
            <DashboardLayout>
                <div className="m-4 mt-10 flex flex-col gap-5">
                    <div className="px-1">
                        <h1 className="text-2xl font-semibold uppercase">Place list</h1>
                    </div>
                    <div className="overflow-x-auto relative shadow-md sm:rounded-lg w-full">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-sm text-gray-200 uppercase bg-gray-50 bg-gray-700 text-gray-300 capitalize">
                                <tr>
                                    <th scope="col" className="py-3 px-6">
                                        ID Card
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Full name
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Phone number
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Vaccine Status
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Address
                                    </th>

                                    <th scope="col" className="py-3 px-6">
                                        <span className="sr-only">Actions</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="border border-t-8 border-indigo-500">
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th
                                        scope="row"
                                        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        Apple MacBook Pro 17 inch
                                    </th>
                                    <td className="py-4 px-6">Sliver</td>
                                    <td className="py-4 px-6">Laptop</td>
                                    <td className="py-4 px-6">$2999</td>
                                    <td className="py-4 px-6">
                                        <span className="bg-amber-500 px-4 py-1 rounded-full text-white">
                                            Portland
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 text-right">
                                        <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                            Details
                                        </a>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th
                                        scope="row"
                                        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        Microsoft Surface Pro
                                    </th>
                                    <td className="py-4 px-6">White</td>
                                    <td className="py-4 px-6">Laptop PC</td>
                                    <td className="py-4 px-6">$1999</td>
                                    <td className="py-4 px-6">
                                        <span className="bg-amber-500 px-4 py-1 rounded-full text-white">
                                            Alabama
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 text-right">
                                        <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                            Details
                                        </a>
                                    </td>
                                </tr>
                                <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th
                                        scope="row"
                                        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        Magic Mouse 2
                                    </th>
                                    <td className="py-4 px-6">Black</td>
                                    <td className="py-4 px-6">Accessories</td>
                                    <td className="py-4 px-6">$99</td>
                                    <td className="py-4 px-6">
                                        <span className="bg-amber-500 px-4 py-1 rounded-full text-white">
                                            Wichita
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 text-right">
                                        <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                            Details
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </DashboardLayout>
        </>
    );
};

export default PlacesPage;
