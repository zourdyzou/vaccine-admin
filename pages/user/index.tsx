// @ts-nocheck
import { Dialog, Transition } from '@headlessui/react';
import { UserAddIcon, UserIcon } from '@heroicons/react/outline';
import type { NextPage } from 'next';
import Head from 'next/head';
import * as React from 'react';
import { useCallback } from 'react';
import { Fragment, useState } from 'react';

import { UserTable } from '@/components/shared/UserTable';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { getAllUser } from '@/redux/actions/user-action';
import DashboardLayout from '@/screens/layout/layout';

const UserPage: NextPage = () => {
    const dispatch = useAppDispatch();

    const [isOpen, setIsOpen] = useState(false);
    const fetchUsersData = useCallback(() => dispatch(getAllUser() as any), [dispatch]);
    const stateUser = useAppSelector((state) => state.getAllUser);

    React.useEffect(() => {
        fetchUsersData();
    }, [fetchUsersData]);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    return (
        <>
            <Head>
                <title>Vaccination Management</title>
            </Head>
            <DashboardLayout>
                <div className="m-4 mt-10 flex flex-col gap-5">
                    <div className="px-1 flex justify-between items-center">
                        <h1 className="text-2xl font-semibold uppercase">User list</h1>
                        <button
                            onClick={openModal}
                            className="flex items-center gap-3 px-4 py-2 bg-blue-600 rounded uppercase font-bold"
                        >
                            <UserAddIcon className="w-4 h-4" />
                            create
                        </button>
                    </div>

                    <UserTable />
                </div>
            </DashboardLayout>

            <>
                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={closeModal}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center p-4 text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                        <Dialog.Title
                                            as="h2"
                                            className="text-2xl font-medium leading-6 text-gray-900 flex items-center gap-2"
                                        >
                                            <UserIcon className="w-7 h-7" />
                                            Create user
                                        </Dialog.Title>
                                        <div className="mt-4 mb-6">
                                            <p className="text-sm text-gray-500">
                                                Add new user information to the database.
                                            </p>
                                        </div>

                                        <form className="mt-4">
                                            <div className="grid grid-cols-2 gap-5">
                                                <div>
                                                    <div className="mb-6">
                                                        <label
                                                            htmlFor="number"
                                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                        >
                                                            ID Number
                                                        </label>
                                                        <input
                                                            type="number"
                                                            id="number"
                                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            required
                                                            placeholder="00xxxxxxx"
                                                        />
                                                    </div>
                                                    <div className="mb-6">
                                                        <label
                                                            htmlFor="name"
                                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                        >
                                                            Full Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="name"
                                                            placeholder="Richard Feynmann"
                                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            required
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="mb-6">
                                                        <label
                                                            htmlFor="number"
                                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                        >
                                                            Phone Number
                                                        </label>
                                                        <input
                                                            type="number"
                                                            id="number"
                                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            placeholder="user phone number"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="mb-6">
                                                        <label
                                                            htmlFor="name"
                                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                        >
                                                            Address
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="name"
                                                            placeholder="Alabama"
                                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <button
                                                    type="submit"
                                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                >
                                                    Submit
                                                </button>
                                            </div>
                                        </form>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
            </>
        </>
    );
};

export default UserPage;
