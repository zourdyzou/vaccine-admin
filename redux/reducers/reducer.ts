import { combineReducers } from 'redux';

import { adminSummaryReducer } from '@/redux/reducers/admin-reducer';
import {
    getSingleUserReducer,
    addVaccineUserReducer,
    getAllUserReducer,
} from '@/redux/reducers/user-reducer';

export const reducers = combineReducers({
    adminSummary: adminSummaryReducer,
    singleUser: getSingleUserReducer,
    addVaccineUser: addVaccineUserReducer,
    getAllUser: getAllUserReducer,
});

export type RootState = ReturnType<typeof reducers>;
