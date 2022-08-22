import { combineReducers } from 'redux';

import { adminSummaryReducer } from '@/redux/reducers/admin-reducer';
import {
    getSingleUserReducer,
    addVaccineUserReducer,
    createUserReducer,
    getAllUserReducer,
    updateUserReducer,
} from '@/redux/reducers/user-reducer';

export const reducers = combineReducers({
    adminSummary: adminSummaryReducer,
    singleUser: getSingleUserReducer,
    addVaccineUser: addVaccineUserReducer,
    createUser: createUserReducer,
    getAllUser: getAllUserReducer,
    updateUser: updateUserReducer,
});

export type RootState = ReturnType<typeof reducers>;
