import { Dispatch } from 'react';

import { userApi } from '@/axios/userApi';
import {
    IUserData,
    IUserPlace,
    IUserVaccineData,
    IVaccinated,
    TypedDispatch,
} from '@/interfaces/data-type';
import {
    ICreateVaccinatedUserFail,
    ICreateVaccinatedUserRequest,
    ICreateVaccinatedUserSuccess,
    IGETAllUserFail,
    IGETAllUserRequest,
    IGETAllUserSuccess,
    IGETSingleUserFail,
    IGETSingleUserRequest,
    IGETSingleUserSuccess,
} from '@/interfaces/user-type-action';
import { getErrorMessage } from '@/redux/actions/admin-action';
import {
    CREATEVaccinatedUserType,
    GETAllUserType,
    GETSingleUserType,
} from '@/redux/constants/user-constant';

type GetAllUserDispatch = IGETAllUserRequest | IGETAllUserSuccess | IGETAllUserFail;
type GetSingleUserDispatch = IGETSingleUserRequest | IGETSingleUserFail | IGETSingleUserSuccess;
type UserVaccinatedDispatch =
    | ICreateVaccinatedUserRequest
    | ICreateVaccinatedUserSuccess
    | ICreateVaccinatedUserFail;

export const getAllUser = () => async (dispatch: TypedDispatch<GetAllUserDispatch>) => {
    try {
        dispatch({ type: GETAllUserType.GET_ALL_USER_REQUEST });

        const userDataResponse = (await userApi.getAll()) as unknown as {
            message: string;
            lists: IUserData[];
        };

        if (!userDataResponse) return;

        dispatch({ type: GETAllUserType.GET_ALL_USER_SUCCESS, payload: userDataResponse.lists });
    } catch (error) {
        dispatch({ type: GETAllUserType.GET_ALL_USER_FAIL, payload: getErrorMessage(error) });
    }
};

export const getSingleUser = (id: string) => async (dispatch: Dispatch<GetSingleUserDispatch>) => {
    try {
        dispatch({ type: GETSingleUserType.GET_SINGLE_USER_REQUEST });

        const userDetail = (await userApi.getOne(id)) as unknown as {
            message: string;
            user: IUserData & IUserPlace & IUserVaccineData;
        };

        if (!userDetail) return;

        dispatch({ type: GETSingleUserType.GET_SINGLE_USER_SUCCESS, payload: userDetail.user });
    } catch (error) {
        dispatch({
            type: GETSingleUserType.GET_SINGLE_USER_FAIL,
            payload: getErrorMessage(error),
        });
    }
};

export const addVaccinationToUser =
    (params: IVaccinated) => async (dispatch: Dispatch<UserVaccinatedDispatch>) => {
        try {
            dispatch({ type: CREATEVaccinatedUserType.CREATE_VACCINATED_USER_REQUEST });

            const createUserVaccinated = (await userApi.vaccinated(params)) as unknown as {
                message: string;
                savedUserVaccine: IUserVaccineData;
            };

            dispatch({
                type: CREATEVaccinatedUserType.CREATE_VACCINATED_USER_SUCCESS,
                payload: createUserVaccinated.savedUserVaccine,
            });
        } catch (error) {
            dispatch({
                type: CREATEVaccinatedUserType.CREATE_VACCINATED_USER_FAIL,
                payload: getErrorMessage(error),
            });
        }
    };
