import { BadgeCheckIcon, LocationMarkerIcon, UsersIcon } from '@heroicons/react/outline';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import React from 'react';

import { CardStats } from '@/components/data-card/card-stats';
import { useAppSelector } from '@/hooks/redux';

export const StatsContainer: React.FunctionComponent = () => {
    const data = useAppSelector((state) => state.adminSummary);

    return (
        <div className="m-4 mt-10 flex flex-grow xl:flex-nowrap flex-wrap gap-5">
            <CardStats
                data={data.totalUser}
                label="Total user"
                ReactIcon={UsersIcon}
                color="text-orange-500"
            />
            <CardStats
                data={data.userVaccinated}
                label="User vaccinated"
                ReactIcon={BadgeCheckIcon}
                color="text-green-500"
            />
            <CardStats
                data={data.availableVaccineDose}
                label="Available Vaccine dose"
                ReactIcon={VaccinesIcon}
                color="text-red-500"
            />
            <CardStats
                data={data.totalPlace}
                label="Total places"
                ReactIcon={LocationMarkerIcon}
                color="text-pink-600"
            />
        </div>
    );
};
