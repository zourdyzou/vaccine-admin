import { IAdminSummaryData } from '@/interfaces/data-type';

import axiosClient from './axiosClient';

export const adminApi = {
  getSummary: () => axiosClient.get<IAdminSummaryData>('admin/summary'),
};
