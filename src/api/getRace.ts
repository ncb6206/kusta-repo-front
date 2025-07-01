import { END_POINTS } from '@/constants/api';
import { axiosInstance } from './axiosInstance';

export const getRace = async (id: string) => {
  const { data } = await axiosInstance.get(END_POINTS.RACE(id));

  return data;
};
