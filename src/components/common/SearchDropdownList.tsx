import { PATH } from '@/constants/path';
import { useUniversityQuery } from '@/hooks/api/useUniversityQuery';
import { useNavigate } from 'react-router-dom';

interface SearchDropdownListProps {
  name: string;
  memberNo?: string;
  classNo?: string;
  universityNo: string;
}

const SearchDropdownList = ({ name, memberNo, classNo, universityNo }: SearchDropdownListProps) => {
  const navigate = useNavigate();
  const { UniversityData } = useUniversityQuery(universityNo);

  const goToProfile = (memberId: string) => {
    navigate(PATH.SEARCH_PROFILE(memberId));
  };

  return (
    <div
      className="flex cursor-pointer items-center gap-4"
      onClick={() => goToProfile(memberNo || '')}
    >
      <div className="flex-shrink-0">
        {/* 유저 아이콘 (SVG) */}
        <img src="/user.svg" alt="한국대학스키연맹" className="h-6 w-6" />
      </div>
      <p>{name}</p>
      <div className="text-gray2 flex gap-2">
        <p>{UniversityData?.data.universityKor}</p>
        <p>{classNo}</p>
      </div>
    </div>
  );
};

export default SearchDropdownList;
