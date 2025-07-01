import { PATH } from '@/constants/path';
import { useNavigate } from 'react-router-dom';

interface SchoolCardProps {
  name: string;
  description?: string;
  universityNo?: number;
  isActive?: boolean;
  selected?: boolean;
  onClick?: () => void;
}

const SchoolCard: React.FC<SchoolCardProps> = ({
  name,
  description,
  universityNo,
  isActive,
  selected,
  onClick,
}) => {
  const navigate = useNavigate();
  console.log(description);

  return (
    <div
      className={`relative flex items-center gap-4 rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:border! hover:border-blue-400! ${isActive || selected ? 'z-10 border-2 border-blue-400 px-7 py-10' : 'p-4'} `}
      onClick={onClick}
    >
      <div className={`flex flex-col items-center ${isActive || selected ? 'w-2/5' : ''}`}>
        <div className="mb-6 h-28 w-28 rounded-full bg-gray-200" />
        <div className="text-center font-semibold">{name}</div>
      </div>
      {isActive && (
        <>
          <hr className="h-full border-r border-gray-200" />
          <div className={`mt-4 h-full text-left text-xs ${isActive || selected ? 'w-3/5' : ''}`}>
            <button
              className="absolute top-4 right-4 mb-2 rounded-full bg-blue-100 px-3 py-1 text-blue-600"
              onClick={() => navigate(PATH.SCHOOL_DETAIL(String(universityNo)))}
            >
              학교 소개
            </button>
            {/* <div dangerouslySetInnerHTML={{ __html: description }} /> */}
          </div>
        </>
      )}
    </div>
  );
};

export default SchoolCard;
