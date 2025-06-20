import { useQuery } from '@tanstack/react-query';

import { getUniversityMember } from '@/api/getUniversityMember';

export const useUniversityMemberQuery = () => {
  const { data: UniversityMemberData } = useQuery({
    queryKey: ['universityMember'],
    queryFn: () => getUniversityMember(),
  });

  return { UniversityMemberData };
};
