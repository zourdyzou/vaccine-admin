import { BaseRouter } from 'next/dist/shared/lib/router/router';
import { Router, useRouter } from 'next/router';
import { useCallback, useState } from 'react';

import { authApi } from '@/axios/authApi';
import { IS_SERVER } from '@/axios/axiosClient';

export const isAuthenticated = async (): Promise<boolean> => {
    const token = localStorage.getItem('token');

    if (!token) return false;

    try {
        await authApi.checkToken();
        return true;
    } catch (err) {
        return false;
    }
};

export const logout = async (
    navigate: BaseRouter &
        Pick<
            Router,
            | 'push'
            | 'replace'
            | 'reload'
            | 'back'
            | 'prefetch'
            | 'beforePopState'
            | 'events'
            | 'isFallback'
            | 'isReady'
            | 'isPreview'
        >,
) => {
    localStorage.removeItem('token');
    await navigate.push('/login');
};

export const useIsAuthenticated = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    const checkToken = useCallback(async () => {
        if (!IS_SERVER) {
            const res = await isAuthenticated();

            if (router.pathname === '/login' && res) return router.push('/');

            if (!res) return router.push('/login');

            setIsLoading(false);
        }
    }, [router]);

    return { isLoading, checkToken };
};
