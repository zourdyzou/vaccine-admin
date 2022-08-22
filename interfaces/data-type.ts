import { Dispatch } from 'react';

export interface IAdminSummaryData {
    availableVaccineDose: number;
    totalPlace: number;
    totalUser: number;
    userVaccinated: number;
    userVaccinatedAnalyst: IUserVaccinationAnalysis;
    latestVaccineLot: ILatestVaccineLot[];
}

export interface IUserVaccinationAnalysis {
    totalUser: number;
    userWithAboveTwoDose: number;
    userWithOneDose: number;
    userWithZeroDose: number;
}

export interface ILatestVaccineLot {
    createdAt: string;
    id: string;
    name: string;
    quantity: number;
    updatedAt: string;
    vaccinated: number;
    vaccine: IVaccineData;
    __v: number;
    _id: string;
}

export interface IVaccineData {
    createdAt: string;
    id: string;
    name: string;
    updatedAt: string;
}

export interface IVaccineLot {
    name: string;
    quantity: number;
    vaccinated: number;
    vaccine: IVaccineData;
}

export interface IUserData {
    phoneNumber: string;
    fullName: string;
    idNumber: string;
    address: string;
    vaccine: IVaccineData[];
    id: string;
}

export interface IUserVaccineData {
    user: IUserData;
    vaccine: IVaccineData;
    vaccineLot: IVaccineLot;
}

export interface IUserPlace {
    name: string;
    address: string;
    creator: IUserData;
}

export type TypedUserParams = Pick<IUserData, 'phoneNumber' | 'fullName' | 'address' | 'idNumber'>;
export type TypedDispatch<T> = Dispatch<T>;

export interface IVaccinated {
    userId: string;
    vaccineId: string;
    vaccineLotId: string;
}

export interface IAdminLoginInfo {
    token: string;
    admin: {
        createdAt: string;
        id: string;
        updatedAt: string;
        username: string;
        __v: 0;
        _id: string;
    };
    message: string;
}
