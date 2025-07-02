/**
 * 학교 상세 정보 페이지 컴포넌트
 */

import { useNavigate, useParams } from 'react-router-dom';

const SchoolDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // TODO: 실제 API에서 학교 정보를 가져와야 함
  console.log('학교 ID:', id);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">학교 상세 정보</h2>
        <button
          onClick={() => navigate('/admin/school')}
          className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
        >
          목록으로
        </button>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">기본 정보</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">학교명</label>
            <p className="text-gray-900">서울대학교</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">지역</label>
            <p className="text-gray-900">서울</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolDetail; 