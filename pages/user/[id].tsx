import { Box } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
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
                    <div className="m-4 mt-10 flex flex-grow xl:flex-nowrap flex-wrap gap-5">
                        <h1>User Detail</h1>
                    </div>
                </DashboardLayout>
            )}
        </>
    );
};

export default UserDetailPage;
