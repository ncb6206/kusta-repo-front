import { useQuery } from '@tanstack/react-query';

import { getRace } from '@/api/getRace';
import { RaceData } from '@/types/race';

export const useRaceQuery = (id: string) => {
  const { data: RaceData } = useQuery<RaceData>({
    queryKey: ['race', id],
    queryFn: () => getRace(id),
  });

  return { RaceData };
};
