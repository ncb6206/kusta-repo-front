import { END_POINTS } from '@/constants/api';
import { axiosInstance } from './axiosInstance';

export const getAllUniversity = async () => {
  const { data } = await axiosInstance.get(END_POINTS.UNIVERSITY_ALL);

  return data;
};
