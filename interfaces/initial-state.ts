import {
    VaccinationUserState,
    GetAllUserState,
    GetSingleUserState,
} from '@/redux/reducers/user-reducer';

export const userInitialState: GetSingleUserState = {
    phoneNumber: '',
    fullName: '',
    idNumber: '',
    address: '',
    vaccine: [],
    id: '',
    loading: false,
    error: '',
};

export const allUserInitialState: GetAllUserState = {
    users: [],
    loading: false,
    error: '',
};

export const vaccinationInitialState: VaccinationUserState = {
    user: {
        phoneNumber: '',
        fullName: '',
        idNumber: '',
        address: '',
        vaccine: [],
        id: '',
    },
    vaccine: {
        createdAt: '',
        id: '',
        name: '',
        updatedAt: '',
    },
    vaccineLot: {
        name: '',
        quantity: 0,
        vaccinated: 0,
        vaccine: {
            createdAt: '',
            id: '',
            name: '',
            updatedAt: '',
        },
    },
    loading: false,
    error: '',
};
