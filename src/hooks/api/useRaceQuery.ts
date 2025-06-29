import { useQuery } from '@tanstack/react-query';

import { getRace } from '@/api/getRace';

export const useRaceQuery = (id: string) => {
  const { data: RaceData } = useQuery({
    queryKey: ['race', id],
    queryFn: () => getRace(id),
  });

  return { RaceData };
};
