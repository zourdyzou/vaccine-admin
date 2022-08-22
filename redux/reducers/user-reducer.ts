import { ClearError } from '@/interfaces/admin-type-action';
import {
    IUserData,
    IUserVaccineData,
    IVaccineData,
    IVaccineLot,
    TypedUserParams,
} from '@/interfaces/data-type';
import {
    userInitialState,
    allUserInitialState,
    updateUserInitialState,
    vaccinationInitialState,
} from '@/interfaces/initial-state';
import { IUserAction } from '@/interfaces/user-type-action';
import {
    CreateUserType,
    CREATEVaccinatedUserType,
    GETAllUserType,
    GETSingleUserType,
    UpdateUserType,
} from '@/redux/constants/user-constant';

export type UpdateUserState = TypedUserParams & { loading: boolean; error: string };
export type CreateUserState = IUserData & { loading: boolean; error: string };
export type GetAllUserState = { users: IUserData[]; loading: boolean; error: string };
export type GetSingleUserState = IUserData & { loading: boolean; error: string };
export type VaccinationUserState = IUserVaccineData & { loading: boolean; error: string };

export const createUserReducer = (
    state: CreateUserState = userInitialState,
    action: IUserAction,
) => {
    switch (action.type) {
        case CreateUserType.CREATE_USER_REQUEST:
            return Object.assign({}, { ...state }, { loading: true });
        case CreateUserType.CREATE_USER_SUCCESS:
            return Object.assign({}, { ...state }, { ...action.payload, loading: false });
        case CreateUserType.CREATE_USER_FAIL:
            return Object.assign({}, { ...state }, { error: action.payload, loading: false });

        case ClearError.CLEAR_ERRORS:
            return Object.assign({}, { ...state }, { error: null });

        default:
            return state;
    }
};

export const updateUserReducer = (
    state: UpdateUserState = updateUserInitialState,
    action: IUserAction,
) => {
    switch (action.type) {
        case UpdateUserType.UPDATE_USER_REQUEST:
            return Object.assign({}, { ...state }, { loading: true });
        case UpdateUserType.UPDATE_USER_SUCCESS:
            return Object.assign({}, { ...state }, { ...action.payload, loading: false });
        case UpdateUserType.UPDATE_USER_FAIL:
            return Object.assign({}, { ...state }, { error: action.payload, loading: false });

        case ClearError.CLEAR_ERRORS:
            return Object.assign({}, { ...state }, { error: null });

        default:
            return state;
    }
};

export const getAllUserReducer = (
    state: GetAllUserState = allUserInitialState,
    action: IUserAction,
) => {
    switch (action.type) {
        case GETAllUserType.GET_ALL_USER_REQUEST:
            return Object.assign({}, { ...state }, { loading: true });
        case GETAllUserType.GET_ALL_USER_SUCCESS:
            return Object.assign({}, { ...state }, { users: action.payload, loading: false });
        case GETAllUserType.GET_ALL_USER_FAIL:
            return Object.assign({}, { ...state }, { loading: false, error: action.payload });

        case ClearError.CLEAR_ERRORS:
            return Object.assign({}, { ...state }, { error: null });

        default:
            return state;
    }
};

export const getSingleUserReducer = (
    state: GetSingleUserState = userInitialState,
    action: IUserAction,
) => {
    switch (action.type) {
        case GETSingleUserType.GET_SINGLE_USER_REQUEST:
            return Object.assign({}, { ...state }, { loading: true });
        case GETSingleUserType.GET_SINGLE_USER_SUCCESS:
            return Object.assign({}, { ...state }, { ...action.payload, loading: false });
        case GETSingleUserType.GET_SINGLE_USER_FAIL:
            return Object.assign({}, { ...state }, { loading: false, error: action.payload });

        case ClearError.CLEAR_ERRORS:
            return Object.assign({}, { ...state }, { error: null });

        default:
            return state;
    }
};

export const addVaccineUserReducer = (
    state: VaccinationUserState = vaccinationInitialState,
    action: IUserAction,
) => {
    switch (action.type) {
        case CREATEVaccinatedUserType.CREATE_VACCINATED_USER_REQUEST:
            return Object.assign({}, { ...state }, { loading: true });
        case CREATEVaccinatedUserType.CREATE_VACCINATED_USER_SUCCESS:
            return Object.assign({}, { ...state }, { ...action.payload, loading: false });
        case CREATEVaccinatedUserType.CREATE_VACCINATED_USER_FAIL:
            return Object.assign({}, { ...state }, { loading: false, error: action.payload });

        case ClearError.CLEAR_ERRORS:
            return Object.assign({}, { ...state }, { error: null });

        default:
            return state;
    }
};
