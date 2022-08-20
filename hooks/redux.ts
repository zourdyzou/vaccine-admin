import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { RootState } from '@/redux/reducers/reducer';
import type { AppDispatch } from '@/redux/store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
