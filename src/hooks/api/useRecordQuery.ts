import { useQuery } from '@tanstack/react-query';

import { getRecord } from '@/api/getRecord';

export const useRecordQuery = (id: string) => {
  const { data: RecordData } = useQuery({
    queryKey: ['record', id],
    queryFn: () => getRecord(id),
  });

  return { RecordData };
};
