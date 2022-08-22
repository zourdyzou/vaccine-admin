import type { NextPage } from 'next';
import Head from 'next/head';
import * as React from 'react';
import { useCallback } from 'react';

import { userApi } from '@/axios/userApi';
import { StatsContainer } from '@/components/shared/Stats';
import { VaccineDataContainer } from '@/components/shared/VaccineDataContainer';
import { useAppDispatch } from '@/hooks/redux';
import { getSummary } from '@/redux/actions/admin-action';
import DashboardLayout from '@/screens/layout/layout';

const Home: NextPage = () => {
    const dispatch = useAppDispatch();

    const fetchAdminSummary = useCallback(() => {
        dispatch(getSummary() as any);
    }, [dispatch]);

    const test = useCallback(async () => {
        const response = await userApi.getOne('6301dacea0ac6b00226a9aba');
        console.log(response);
    }, []);

    React.useEffect(() => {
        fetchAdminSummary();
        test();
    }, [fetchAdminSummary, test]);

    return (
        <>
            <Head>
                <title>Vaccination Management</title>
            </Head>
            <DashboardLayout>
                <StatsContainer />
                <VaccineDataContainer />
            </DashboardLayout>
        </>
    );
};

export default Home;
