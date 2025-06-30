import { END_POINTS } from '@/constants/api';
import { axiosInstance } from './axiosInstance';

export const getRecord = async (id: string) => {
  const { data } = await axiosInstance.get(END_POINTS.RECORD(id));

  return data;
};
