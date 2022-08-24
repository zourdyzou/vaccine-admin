import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import DashboardLayout from '@/screens/layout/layout';

const UserDetailPage: NextPage = () => {
    const { query } = useRouter();

    return (
        <>
            <Head>
                <title>Vaccination Management</title>
            </Head>
            <DashboardLayout>
                <div className="m-4 mt-10 flex flex-grow xl:flex-nowrap flex-wrap gap-5">
                    <h1>User Detail</h1>
                </div>
            </DashboardLayout>
        </>
    );
};

export default UserDetailPage;
