import { END_POINTS } from '@/constants/api';
import { axiosInstance } from '@/api/axiosInstance';

export const getUniversity = async (id: string) => {
  const { data } = await axiosInstance.get(END_POINTS.UNIVERSITY(id));

  return data;
};
