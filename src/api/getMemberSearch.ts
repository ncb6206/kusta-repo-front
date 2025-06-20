import { END_POINTS } from '@/constants/api';
import { axiosInstance } from './axiosInstance';

export const getMemberSearch = async (name: string) => {
  const { data } = await axiosInstance.get(END_POINTS.MEMBER_SEARCH(name));

  return data;
};
