// @ts-nocheck

import { Dialog, Transition } from '@headlessui/react';
import { UserIcon } from '@heroicons/react/outline';
import React, { Fragment } from 'react';

import { AutocompleteBox } from '@/components/shared/AutocompleteBox';
import { Loading } from '@/components/shared/Loading';

interface UserDialogProps {
    onSubmit: boolean;
    closeModal: boolean;
    isOpen: boolean;
    createUserHandler?: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
    updateUserHandler?: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
    handleChange: (
        event?: React.ChangeEvent<HTMLInputElement> | null,
        additionalKey?: string,
        additionalProp?: string,
    ) => void;
    errorIncomplete: {
        message: string;
        status: boolean;
    };
    userData: {
        phoneNumber: string;
        fullName: string;
        idNumber: string;
        address: string;
    };
}

export const UserDetailsDialog: React.FunctionComponent<UserDialogProps> = ({
    createUserHandler,
    updateUserHandler,
    onSubmit,
    isOpen,
    closeModal,
    userData,
    handleChange,
    errorIncomplete,
}) => {
    return (
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
                            <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all">
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

                                <form
                                    onSubmit={
                                        createUserHandler ? createUserHandler : updateUserHandler
                                    }
                                    className="mt-4"
                                >
                                    <div className="flex flex-col gap-4 mb-6">
                                        <div className="">
                                            <label
                                                htmlFor="number"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                            >
                                                ID Number
                                            </label>
                                            <input
                                                type="number"
                                                id="number"
                                                name="idNumber"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                required
                                                placeholder="00xxxxxxx"
                                                value={userData.idNumber}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="">
                                            <label
                                                htmlFor="name"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                            >
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="fullName"
                                                placeholder="Richard Feynmann"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                required
                                                value={userData.fullName}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="">
                                            <label
                                                htmlFor="number"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                            >
                                                Phone Number
                                            </label>
                                            <input
                                                type="number"
                                                id="number"
                                                name="phoneNumber"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="user phone number"
                                                required
                                                value={userData.phoneNumber}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="">
                                            <label
                                                htmlFor="name"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                            >
                                                Address
                                            </label>
                                            <AutocompleteBox
                                                value={userData.address}
                                                handleChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    {errorIncomplete.status && (
                                        <div className="mb-6 py-2 px-3 rounded-md bg-red-600">
                                            <span>{errorIncomplete.message}</span>
                                        </div>
                                    )}

                                    <div className="flex items-start">
                                        <button
                                            type="submit"
                                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        >
                                            {onSubmit ? <Loading /> : 'submit'}
                                        </button>
                                    </div>
                                </form>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};
