import { useQuery } from '@tanstack/react-query';

import { getUniversity } from '@/api/getUniversity';

export const useUniversityQuery = (id: string) => {
  const { data: UniversityData } = useQuery({
    queryKey: ['university', id],
    queryFn: () => getUniversity(id),
  });

  return { UniversityData };
};
