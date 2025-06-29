import { useQuery } from '@tanstack/react-query';

import { getUniversity } from '@/api/getUniversity';
import { UniversityData } from '@/types/university';

export const useUniversityQuery = (id: string) => {
  const { data: UniversityData } = useQuery<UniversityData>({
    queryKey: ['university', id],
    queryFn: () => getUniversity(id),
  });

  return { UniversityData };
};
