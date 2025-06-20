import { useQuery } from '@tanstack/react-query';

import { getMemberSearch } from '@/api/getMemberSearch';

export const useMemberSearchQuery = (id: string) => {
  const { data: MemberSearchData } = useQuery({
    queryKey: ['memberSearch', id],
    queryFn: () => getMemberSearch(id),
  });

  return { MemberSearchData };
};
