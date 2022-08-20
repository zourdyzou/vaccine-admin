import { LogoutIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

import { logout } from '@/utils/auth-handler';

export const NavigationHeader: React.FunctionComponent = () => {
    const router = useRouter();

    return (
        <nav className="h-14 flex justify-end pr-4 m-4 bg-indigo-500 rounded">
            <ul className="flex items-center gap-5">
                <li>
                    <div className="h-10 w-10 relative">
                        <Image
                            src="https://i.pinimg.com/564x/dc/f0/26/dcf0266ef572a88d7eeb53f404d3e97b.jpg"
                            layout="fill"
                            className="rounded-full"
                            objectFit="cover"
                            alt="profile admin"
                        />
                    </div>
                </li>
                |
                <li
                    onClick={async () => logout(router)}
                    className="hover:cursor-pointer p-2 hover:bg-indigo-700 hover:rounded"
                >
                    <LogoutIcon className="w-7 h-7" />
                </li>
            </ul>
        </nav>
    );
};
