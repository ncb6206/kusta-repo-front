import { useQuery } from '@tanstack/react-query';

import { getMemberSearch } from '@/api/getMemberSearch';
import { SearchMemberData } from '@/types/member';

export const useMemberSearchQuery = (name: string) => {
  const { data: MemberSearchData } = useQuery<SearchMemberData>({
    queryKey: ['memberSearch', name],
    queryFn: () => getMemberSearch(name),
  });

  return { MemberSearchData };
};
