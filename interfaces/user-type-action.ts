import { IClearErrors } from '@/interfaces/admin-type-action';
import { IUserData, IUserVaccineData } from '@/interfaces/data-type';
import {
    CREATEVaccinatedUserType,
    GETAllUserType,
    GETSingleUserType,
} from '@/redux/constants/user-constant';

export interface IGETAllUserRequest {
    type: GETAllUserType.GET_ALL_USER_REQUEST;
}

export interface IGETAllUserSuccess {
    type: GETAllUserType.GET_ALL_USER_SUCCESS;
    payload: IUserData[];
}

export interface IGETAllUserFail {
    type: GETAllUserType.GET_ALL_USER_FAIL;
    payload: string | null;
}

export interface IGETSingleUserRequest {
    type: GETSingleUserType.GET_SINGLE_USER_REQUEST;
}

export interface IGETSingleUserSuccess {
    type: GETSingleUserType.GET_SINGLE_USER_SUCCESS;
    payload: IUserData;
}

export interface IGETSingleUserFail {
    type: GETSingleUserType.GET_SINGLE_USER_FAIL;
    payload: string | null;
}

export interface ICreateVaccinatedUserRequest {
    type: CREATEVaccinatedUserType.CREATE_VACCINATED_USER_REQUEST;
}

export interface ICreateVaccinatedUserSuccess {
    type: CREATEVaccinatedUserType.CREATE_VACCINATED_USER_SUCCESS;
    payload: IUserVaccineData;
}

export interface ICreateVaccinatedUserFail {
    type: CREATEVaccinatedUserType.CREATE_VACCINATED_USER_FAIL;
    payload: string | null;
}

export type IUserAction =
    | IGETAllUserSuccess
    | IGETAllUserRequest
    | IGETAllUserFail
    | IGETSingleUserRequest
    | IGETSingleUserSuccess
    | IGETSingleUserFail
    | ICreateVaccinatedUserRequest
    | ICreateVaccinatedUserSuccess
    | ICreateVaccinatedUserFail
    | IClearErrors;
