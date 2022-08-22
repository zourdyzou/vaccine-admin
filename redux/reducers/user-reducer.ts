import { ClearError } from '@/interfaces/admin-type-action';
import { IUserData, IUserVaccineData, TypedUserParams } from '@/interfaces/data-type';
import { IUserAction } from '@/interfaces/user-type-action';
import {
    CreateUserType,
    CREATEVaccinatedUserType,
    GETAllUserType,
    GETSingleUserType,
    UpdateUserType,
} from '@/redux/constants/user-constant';

type UpdateUserState = TypedUserParams & { loading: boolean; error: string };
type CreateUserState = IUserData & { loading: boolean; error: string };
type GetAllUserState = { users: IUserData[]; loading: boolean; error: string };
type GetSingleUserState = IUserData & { loading: boolean; error: string };
type VaccinationUserState = IUserVaccineData & { loading: boolean; error: string };

export const createUserReducer = (state: CreateUserState, action: IUserAction) => {
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

export const updateUserReducer = (state: UpdateUserState, action: IUserAction) => {
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

export const getAllUserReducer = (state: GetAllUserState, action: IUserAction) => {
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

export const getSingleUserReducer = (state: GetSingleUserState, action: IUserAction) => {
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

export const addVaccineUserReducer = (state: VaccinationUserState, action: IUserAction) => {
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
