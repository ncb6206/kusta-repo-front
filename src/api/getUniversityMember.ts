import { END_POINTS } from '@/constants/api';
import { axiosInstance } from './axiosInstance';

export const getUniversityMember = async () => {
  const { data } = await axiosInstance.get(END_POINTS.UNIVERSITY_MEMBER);

  return data;
};
