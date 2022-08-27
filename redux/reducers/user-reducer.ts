import { ClearError } from '@/interfaces/admin-type-action';
import { IUserData, IUserVaccineData } from '@/interfaces/data-type';
import {
    userInitialState,
    allUserInitialState,
    vaccinationInitialState,
} from '@/interfaces/initial-state';
import { IUserAction } from '@/interfaces/user-type-action';
import {
    CREATEVaccinatedUserType,
    GETAllUserType,
    GETSingleUserType,
} from '@/redux/constants/user-constant';

export type GetAllUserState = { users: IUserData[]; loading: boolean; error: string };
export type GetSingleUserState = IUserData & { loading: boolean; error: string };
export type VaccinationUserState = IUserVaccineData & { loading: boolean; error: string };

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
