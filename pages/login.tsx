import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { authApi } from '@/axios/authApi';
import { IS_SERVER } from '@/axios/axiosClient';
import { IAdminLoginInfo } from '@/interfaces/data-type';
import { getErrorMessage } from '@/redux/actions/admin-action';
import { useIsAuthenticated } from '@/utils/auth-handler';

const LoginPage: NextPage = () => {
    const [admin, setAdmin] = useState({
        username: '',
        password: '',
    });
    const [onSubmit, setOnSubmit] = useState(false);
    const [loginErr, setLoginErr] = useState('');

    const { checkToken } = useIsAuthenticated();

    const router = useRouter();

    useEffect(() => {
        checkToken();
    }, [checkToken]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        setAdmin((prevState) => ({
            ...prevState,
            [event.target.name]: value,
        }));
    };

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        if (onSubmit) return;

        setOnSubmit(true);

        try {
            const response = (await authApi.login(admin)) as unknown as IAdminLoginInfo;

            !IS_SERVER && localStorage.setItem('token', response.token);

            setOnSubmit(false);

            await router.push('/');
        } catch (error) {
            setLoginErr(getErrorMessage(error));
            setOnSubmit(false);
        }
    };

    return (
        <>
            <Head>
                <title>Vaccination Management</title>
            </Head>
            <div className="w-full h-screen ">
                <div className="h-full flex items-center justify-center">
                    <div className="h-[400px] w-[350px] px-5 py-6 space-y-3 rounded-xl bg-lime-400 text-gray-100">
                        <h2 className="text-3xl font-semibold text-indigo-500 flex items-center gap-2 pb-3 p-3">
                            <CoronavirusIcon className="w-[50px] h-[50px] text-red-600" />
                            Vaccine
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6 ng-untouched">
                            <div className="space-y-1 text-sm">
                                <label htmlFor="username" className="block text-black">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    placeholder="Username"
                                    value={admin.username}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-white focus:dark:border-violet-400"
                                />
                            </div>
                            <div className="space-y-1 text-sm">
                                <label htmlFor="password" className="block text-black">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={admin.password}
                                    onChange={handleChange}
                                    placeholder="Password"
                                    className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-white focus:dark:border-violet-400"
                                />
                            </div>
                            <button
                                type="submit"
                                className="block w-full p-3 text-center rounded text-white bg-violet-800 uppercase"
                            >
                                login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
