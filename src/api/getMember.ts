import { END_POINTS } from '@/constants/api';
import { axiosInstance } from './axiosInstance';

export const getMember = async (id: string) => {
  const { data } = await axiosInstance.get(END_POINTS.MEMBER(id));

  return data;
};
