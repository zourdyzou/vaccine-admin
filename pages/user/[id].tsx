import { Box } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';
import * as React from 'react';

import { Loading } from '@/components/shared/Loading';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { getSingleUser } from '@/redux/actions/user-action';
import DashboardLayout from '@/screens/layout/layout';

const UserDetailPage: NextPage = () => {
    const {
        query: { id: userID },
    } = useRouter();
    const dispatch = useAppDispatch();
    const userState = useAppSelector((state) => state.singleUser);

    const fetchUserData = useCallback(
        () => dispatch(getSingleUser(userID as string) as any),
        [dispatch, userID],
    );

    useEffect(() => {
        fetchUserData();
    }, [fetchUserData]);

    return (
        <>
            <Head>
                <title>Vaccination Management</title>
            </Head>
            {userState.loading ? (
                <Box sx={{ width: '100%', height: '100%' }}>
                    <div className="flex items-center justify-center h-screen">
                        <Loading />
                    </div>
                </Box>
            ) : (
                <DashboardLayout>
                    <div className="m-4 mt-10 flex flex-col">
                        <h1 className="text-2xl font-semibold ml-2">User Detail</h1>
                        {/*  UserDetails  */}
                        <div className="mt-6 mx-2 grid grid-cols-3 h-screen w-full gap-7">
                            {/*  user photo  */}
                            <div className="h-[500px] w-[450px] relative">
                                <Image
                                    src="https://i.pinimg.com/750x/69/1b/7d/691b7dc4229c422835b8a7f5c2e9d6b4.jpg"
                                    layout="fill"
                                    className="rounded-md"
                                    objectFit="cover"
                                    alt="profile admin"
                                />
                            </div>
                            {/*  user details: full name, id, address, phoneNumber, vaccination details  */}
                            <div className=" w-full col-span-2 flex flex-col gap-5">
                                <div className="">
                                    <label
                                        htmlFor="number"
                                        className="block mb-2 text-sm font-medium text-gray-200"
                                    >
                                        ID Number
                                    </label>
                                    <input
                                        type="number"
                                        id="number"
                                        name="idNumber"
                                        value={userState.idNumber}
                                        className="bg-gray-600 text-gray-00 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-100"
                                        required
                                        disabled
                                    />
                                </div>
                                <div className="">
                                    <label
                                        htmlFor="name"
                                        className="block mb-2 text-sm font-medium text-gray-200"
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="fullName"
                                        value={userState.fullName}
                                        className="bg-gray-600 text-gray-00 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-100"
                                        required
                                        disabled
                                    />
                                </div>
                                <div className="">
                                    <label
                                        htmlFor="number"
                                        className="block mb-2 text-sm font-medium text-gray-200"
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        type="number"
                                        id="number"
                                        name="phoneNumber"
                                        value={userState.phoneNumber}
                                        className="bg-gray-600 text-gray-00 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-100"
                                        required
                                        disabled
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label
                                        htmlFor="address"
                                        className="block mb-2 text-sm font-medium text-gray-200"
                                    >
                                        Address
                                    </label>
                                    <input
                                        type="text"
                                        id="address"
                                        name="address"
                                        value={userState.address}
                                        className="bg-gray-600 text-gray-00 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-100"
                                        required
                                        disabled
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </DashboardLayout>
            )}
        </>
    );
};

export default UserDetailPage;
