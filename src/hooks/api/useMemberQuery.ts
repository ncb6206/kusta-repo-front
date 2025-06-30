import { useQuery } from '@tanstack/react-query';

import { getMember } from '@/api/getMember';
import { MemberData } from '@/types/member';

export const useMemberQuery = (id: string) => {
  const { data: MemberData } = useQuery<MemberData>({
    queryKey: ['member', id],
    queryFn: () => getMember(id),
  });

  return { MemberData };
};
