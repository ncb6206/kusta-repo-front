import SchoolCard from '@/components/common/SchoolCard';
import { PATH } from '@/constants/path';
import { useNavigate } from 'react-router-dom';

interface SchoolCardGridProps {
  schools: { name: string }[];
}
const SchoolCardGrid: React.FC<SchoolCardGridProps> = ({ schools }) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {schools.map((school, idx) => (
        <SchoolCard
          key={idx}
          name={school.name}
          onClick={() => navigate(PATH.SCHOOL_DETAIL(String(idx)))}
        />
      ))}
    </div>
  );
};

export default SchoolCardGrid;
