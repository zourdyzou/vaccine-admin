import React from 'react';

import { LatestVaccineLotTable } from '@/components/shared/LatestVaccineLotTable';
import { VaccineChart } from '@/components/shared/VaccineChart';
import { useAppSelector } from '@/hooks/redux';

export const VaccineDataContainer: React.FunctionComponent = () => {
    const state = useAppSelector((state) => state.adminSummary);

    return (
        <div className="m-5 flex  gap-5">
            <VaccineChart chartData={state.userVaccinatedAnalyst} />
            <div className="w-full">
                <div className="py-2 px-2 mb-2 font-bold uppercase text-2xl bg-amber-500 rounded">
                    <h1>Latest Vaccine Lots</h1>
                </div>
                <LatestVaccineLotTable list={state.latestVaccineLot} />
            </div>
        </div>
    );
};
