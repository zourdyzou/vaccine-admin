import type { NextPage } from 'next';
import Head from 'next/head';
import * as React from 'react';
import { useCallback } from 'react';

import { StatsContainer } from '@/components/shared/Stats';
import { VaccineDataContainer } from '@/components/shared/VaccineDataContainer';
import { useAppDispatch } from '@/hooks/redux';
import { getSummary } from '@/redux/actions/admin-action';
import DashboardLayout from '@/screens/layout/layout';

const Home: NextPage = () => {
    const dispatch = useAppDispatch();

    const fetchAdminSummary = useCallback(() => dispatch(getSummary() as any), [dispatch]);

    React.useEffect(() => {
        fetchAdminSummary();
    }, [fetchAdminSummary]);

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
