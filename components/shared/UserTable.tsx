import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { Box } from '@mui/material';
import classNames from 'classnames';
import React from 'react';

import { Loading } from '@/components/shared/Loading';
import { useAppSelector } from '@/hooks/redux';

export const UserTable: React.FunctionComponent = () => {
    const state = useAppSelector((stateData) => stateData.getAllUser);

    if (state.loading && !state.users) {
        return (
            <Box sx={{ width: '100%', height: '100%' }}>
                <div className="flex items-center justify-center h-full">
                    <Loading />
                </div>
            </Box>
        );
    }

    return (
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg w-full scrollbar-hide rounded-lg whitespace-nowrap">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
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
                    {state.users &&
                        state.users.map((userData) => {
                            return (
                                <tr
                                    key={`user-data-${userData.phoneNumber}`}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                >
                                    <th
                                        scope="row"
                                        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {userData.idNumber}
                                    </th>
                                    <td className="py-4 px-6">
                                        <span className="cursor-pointer text-blue-600 hover:underline">
                                            {userData.fullName}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6">{userData.phoneNumber}</td>
                                    <td className="py-4 px-6">
                                        <span
                                            className={classNames(
                                                'flex items-center gap-1.5 text-white rounded-full px-4 py-0.5 w-[210px]',
                                            )}
                                            style={{
                                                backgroundColor:
                                                    userData.vaccine.length > 1
                                                        ? 'green'
                                                        : userData.vaccine.length === 1
                                                        ? 'orange'
                                                        : 'red',
                                            }}
                                        >
                                            {userData.vaccine.length > 1 && (
                                                <VerifiedUserIcon className="w-4 h-4" />
                                            )}
                                            {userData.vaccine.length === 1 && (
                                                <ShieldOutlinedIcon className="w-4 h-4" />
                                            )}
                                            {userData.vaccine.length < 1 && (
                                                <ErrorOutlineOutlinedIcon className="w-4 h-4" />
                                            )}

                                            <span>
                                                Vaccinated with {userData.vaccine.length} dove
                                                {userData.vaccine.length > 1 && 's'}
                                            </span>
                                        </span>
                                    </td>
                                    <td className="py-4 px-6">
                                        <span className="bg-amber-500 px-4 py-1 rounded-full text-white">
                                            {userData.address}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 text-right">
                                        <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                            Details
                                        </a>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
            {!state.users && (
                <div className="h-[20em] bg-teal-800 flex items-center justify-center">
                    <h1 className="text-2xl uppercase font-semibold">No data enlisted</h1>
                </div>
            )}
        </div>
    );
};
