import { useQuery } from '@tanstack/react-query';

import { getAllUniversity } from '@/api/getAllUniversity';
import { AllUniversityData } from '@/types/university';

export const useAllUniversityQuery = () => {
  const { data: AllUniversityData } = useQuery<AllUniversityData>({
    queryKey: ['university'],
    queryFn: () => getAllUniversity(),
  });

  return { AllUniversityData };
};
