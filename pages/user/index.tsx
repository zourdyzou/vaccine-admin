import { UserAddIcon } from '@heroicons/react/outline';
import { Box } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import * as React from 'react';
import { useCallback } from 'react';

import { Loading } from '@/components/shared/Loading';
import { UserTable } from '@/components/shared/UserTable';
import { useAppDispatch } from '@/hooks/redux';
import { getAllUser } from '@/redux/actions/user-action';
import DashboardLayout from '@/screens/layout/layout';

const UserPage: NextPage = () => {
    const dispatch = useAppDispatch();

    const fetchUsersData = useCallback(() => dispatch(getAllUser() as any), [dispatch]);

    React.useEffect(() => {
        fetchUsersData();
    }, [fetchUsersData]);

    return (
        <>
            <Head>
                <title>Vaccination Management</title>
            </Head>
            <DashboardLayout>
                <div className="m-4 mt-10 flex flex-col gap-5">
                    <div className="px-1 flex justify-between items-center">
                        <h1 className="text-2xl font-semibold uppercase">User list</h1>
                        <button className="flex items-center gap-3 px-4 py-2 bg-blue-600 rounded uppercase font-bold">
                            <UserAddIcon className="w-4 h-4" />
                            create
                        </button>
                    </div>

                    <UserTable />
                </div>
            </DashboardLayout>
        </>
    );
};

export default UserPage;
