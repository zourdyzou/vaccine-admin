// @ts-nocheck
import { UserAddIcon } from '@heroicons/react/outline';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';

import { userApi } from '@/axios/userApi';
import { UserDetailsDialog } from '@/components/shared/UserDetailsDialog';
import { UserTable } from '@/components/shared/UserTable';
import { useAppDispatch } from '@/hooks/redux';
import { IUserData } from '@/interfaces/data-type';
import { getAllUser } from '@/redux/actions/user-action';
import DashboardLayout from '@/screens/layout/layout';
import { stateOptions } from '@/utils/data-location';

/**
 * TODO:
 * Create form handling error using RHF/Formik
 * If user is created admin will be redirected to the user detail page
 *
 * Refactor logic handler => functions
 *
 * Context API for the next refactor round
 * @constructor
 */
const UserPage: NextPage = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const [onSubmit, setOnSubmit] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => setIsOpen(false);
    const openModal = () => setIsOpen(true);
    const [userData, setUserData] = useState({
        phoneNumber: '',
        fullName: '',
        idNumber: '',
        address: stateOptions[0].label,
    });

    const [errorIncomplete, setErrorIncomplete] = useState({
        status: false,
        message: '',
    });

    const handleChange = (
        event?: React.ChangeEvent<HTMLInputElement> | null,
        additionalKey?: string,
        additionalProp?: string,
    ) => {
        setUserData((prevState) => ({
            ...prevState,
            [event ? event.target.name : additionalKey]: event
                ? event.target.value
                : additionalProp,
        }));
    };

    const fetchUsersData = useCallback(() => dispatch(getAllUser() as any), [dispatch]);

    React.useEffect(() => {
        fetchUsersData();
    }, [fetchUsersData]);

    const createUserHandler = React.useCallback(
        async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            if (onSubmit) return;

            setOnSubmit(true);

            try {
                if (
                    !userData.fullName ||
                    !userData.address ||
                    !userData.phoneNumber ||
                    !userData.idNumber
                ) {
                    setOnSubmit(false);

                    setErrorIncomplete({
                        status: true,
                        message:
                            'There is something wrong! you need to complete the form otherwise you could not send any data to the database',
                    });

                    setUserData({
                        phoneNumber: '',
                        fullName: '',
                        idNumber: '',
                        address: stateOptions[0].label,
                    });
                } else {
                    const createdUser = (await userApi.create({
                        ...userData,
                    })) as unknown as {
                        user: IUserData;
                        token: string;
                    };

                    if (Object.entries(createdUser).length !== 0) {
                        setOnSubmit(false);
                        await router.push(`/user/${createdUser.user.id}`);
                    }
                }
            } catch (error) {
                setOnSubmit(false);
            }
        },
        [onSubmit, router, userData],
    );

    console.log(userData);

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

            <UserDetailsDialog
                isOpen={isOpen}
                closeModal={closeModal}
                createUserHandler={createUserHandler}
                onSubmit={onSubmit}
                errorIncomplete={errorIncomplete}
                handleChange={handleChange}
                userData={userData}
            />
        </>
    );
};

export default UserPage;
