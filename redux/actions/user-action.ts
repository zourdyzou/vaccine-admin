import { Dispatch } from 'react';

import { userApi } from '@/axios/userApi';
import {
    IUserData,
    IUserPlace,
    IUserVaccineData,
    IVaccinated,
    TypedDispatch,
    TypedUserParams,
} from '@/interfaces/data-type';
import {
    ICreateUserFail,
    ICreateUserRequest,
    ICreateUserSuccess,
    ICreateVaccinatedUserFail,
    ICreateVaccinatedUserRequest,
    ICreateVaccinatedUserSuccess,
    IGETAllUserFail,
    IGETAllUserRequest,
    IGETAllUserSuccess,
    IGETSingleUserFail,
    IGETSingleUserRequest,
    IGETSingleUserSuccess,
    IUpdateUserFail,
    IUpdateUserRequest,
    IUpdateUserSuccess,
} from '@/interfaces/user-type-action';
import { getErrorMessage } from '@/redux/actions/admin-action';
import {
    CreateUserType,
    CREATEVaccinatedUserType,
    GETAllUserType,
    GETSingleUserType,
    UpdateUserType,
} from '@/redux/constants/user-constant';

type GetAllUserDispatch = IGETAllUserRequest | IGETAllUserSuccess | IGETAllUserFail;
type CreateUserDispatch = ICreateUserRequest | ICreateUserSuccess | ICreateUserFail;
type UpdateUserDispatch = IUpdateUserRequest | IUpdateUserSuccess | IUpdateUserFail;
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
        dispatch({ type: GETSingleUserType.GET_SINGLE_USER_FAIL, payload: getErrorMessage(error) });
    }
};

export const createUser =
    (params: TypedUserParams) => async (dispatch: Dispatch<CreateUserDispatch>) => {
        try {
            dispatch({ type: CreateUserType.CREATE_USER_REQUEST });

            const createdUser = (await userApi.create(params)) as unknown as {
                user: IUserData;
                token: string;
            };

            dispatch({ type: CreateUserType.CREATE_USER_SUCCESS, payload: createdUser.user });
        } catch (error) {
            dispatch({ type: CreateUserType.CREATE_USER_FAIL, payload: getErrorMessage(error) });
        }
    };

export const updateUser =
    (id: string, params: TypedUserParams) => async (dispatch: Dispatch<UpdateUserDispatch>) => {
        try {
            dispatch({ type: UpdateUserType.UPDATE_USER_REQUEST });

            const updatedUser = (await userApi.update(id, params)) as unknown as {
                message: string;
                updated_user: IUserData;
            };

            dispatch({
                type: UpdateUserType.UPDATE_USER_SUCCESS,
                payload: updatedUser.updated_user,
            });
        } catch (error) {
            dispatch({ type: UpdateUserType.UPDATE_USER_FAIL, payload: getErrorMessage(error) });
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
