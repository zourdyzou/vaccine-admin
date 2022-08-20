import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import { reducers } from '@/redux/reducers/reducer';

export const store = configureStore({
    middleware: [thunkMiddleware, logger],
    devTools: true,
    reducer: reducers,
});

export type AppDispatch = typeof store.dispatch;
