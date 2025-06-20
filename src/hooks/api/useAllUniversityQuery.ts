import { useQuery } from '@tanstack/react-query';

import { getAllUniversity } from '@/api/getAllUniversity';
import { UniversityData } from '@/types/university';

export const useAllUniversityQuery = () => {
  const { data: AllUniversityData } = useQuery<UniversityData>({
    queryKey: ['university'],
    queryFn: () => getAllUniversity(),
  });

  return { AllUniversityData };
};
