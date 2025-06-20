import { useQuery } from '@tanstack/react-query';

import { getMember } from '@/api/getMember';

export const useMemberQuery = (id: string) => {
  const { data: MemberData } = useQuery({
    queryKey: ['member', id],
    queryFn: () => getMember(id),
  });

  return { MemberData };
};
