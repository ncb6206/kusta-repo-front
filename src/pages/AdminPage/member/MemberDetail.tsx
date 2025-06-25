/**
 * 회원 상세 정보 페이지 컴포넌트
 * 특정 회원의 상세 정보와 활동 내역을 표시합니다
 */

import { Link, useNavigate, useParams } from 'react-router-dom';

/**
 * 회원 상세 정보 컴포넌트
 * @return JSX 엘리먼트
 */
const MemberDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // TODO: 실제 API에서 회원 정보를 가져와야 함
  const memberData = {
    id: id,
    name: '홍길동',
    email: 'hong@seoul.ac.kr',
    studentId: '2021001',
    university: '서울대학교',
    phone: '010-1234-5678',
    status: 'active',
    joinDate: '2021-03-15',
    lastLogin: '2024-01-15 14:30',
  };

  /**
   * 회원 삭제 핸들러
   */
  const handleDelete = () => {
    if (confirm('정말로 이 회원을 삭제하시겠습니까?')) {
      // TODO: API 호출로 회원 삭제
      console.log('회원 삭제:', id);
      navigate('/admin/member');
    }
  };

  return (
    <div className="space-y-6">
      {/* 페이지 헤더 */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">회원 상세 정보</h2>
          <p className="text-gray-600 mt-1">회원의 상세 정보와 활동 내역을 확인합니다</p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={() => navigate('/admin/member')}
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            목록으로
          </button>
          <Link
            to={`/admin/member/${id}/edit`}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            수정
          </Link>
          <button
            onClick={handleDelete}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            삭제
          </button>
        </div>
      </div>

      {/* 회원 기본 정보 */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">기본 정보</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">이름</label>
            <p className="text-gray-900">{memberData.name}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">이메일</label>
            <p className="text-gray-900">{memberData.email}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">학번</label>
            <p className="text-gray-900">{memberData.studentId}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">대학교</label>
            <p className="text-gray-900">{memberData.university}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">전화번호</label>
            <p className="text-gray-900">{memberData.phone}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">상태</label>
            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
              memberData.status === 'active' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {memberData.status === 'active' ? '활성' : '비활성'}
            </span>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">가입일</label>
            <p className="text-gray-900">{memberData.joinDate}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">최근 로그인</label>
            <p className="text-gray-900">{memberData.lastLogin}</p>
          </div>
        </div>
      </div>

      {/* 대회 참가 내역 */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">대회 참가 내역</h3>
        <div className="overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  대회명
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  참가일
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  순위
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  점수
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* 임시 데이터 */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  2024 춘계 프로그래밍 대회
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  2024-03-15
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  3위
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  850점
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  2023 추계 프로그래밍 대회
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  2023-09-20
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  5위
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  720점
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MemberDetail; 