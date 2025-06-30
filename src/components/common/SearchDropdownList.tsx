import { useUniversityQuery } from '@/hooks/api/useUniversityQuery';

interface SearchDropdownListProps {
  name: string;
  classNo?: string;
  universityNo: string;
}

const SearchDropdownList = ({ name, classNo, universityNo }: SearchDropdownListProps) => {
  const { UniversityData } = useUniversityQuery(universityNo);

  return (
    <>
      <div className="flex-shrink-0">
        {/* 유저 아이콘 (SVG) */}
        <img src="/user.svg" alt="한국대학스키연맹" className="h-6 w-6" />
      </div>
      <p>{name}</p>
      <div className="text-gray2 flex gap-2">
        <p>{UniversityData?.data.universityKor}</p>
        <p>{classNo}</p>
      </div>
    </>
  );
};

export default SearchDropdownList;
