/**
 * 회원 등록/수정 폼 컴포넌트
 * 새 회원 등록 및 기존 회원 정보 수정 기능을 제공합니다
 */

import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

/**
 * 회원 폼 컴포넌트
 * @return JSX 엘리먼트
 */
const MemberForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);

  /** 폼 데이터 상태 */
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    studentId: '',
    university: '',
    phone: '',
    status: 'active',
  });

  /**
   * 입력 필드 변경 핸들러
   * @param e 입력 이벤트
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   * 폼 제출 핸들러
   * @param e 폼 이벤트
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: API 호출로 회원 정보 저장
    console.log('회원 정보 저장:', formData);
    navigate('/admin/member');
  };

  return (
    <div className="space-y-6">
      {/* 페이지 헤더 */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            {isEdit ? '회원 정보 수정' : '회원 등록'}
          </h2>
          <p className="text-gray-600 mt-1">
            {isEdit ? '회원 정보를 수정합니다' : '새로운 회원을 등록합니다'}
          </p>
        </div>
        <button
          onClick={() => navigate('/admin/member')}
          className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
        >
          목록으로
        </button>
      </div>

      {/* 폼 영역 */}
      <div className="bg-white rounded-lg shadow p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 이름 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                이름 *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="회원 이름을 입력하세요"
              />
            </div>

            {/* 이메일 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                이메일 *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="이메일을 입력하세요"
              />
            </div>

            {/* 학번 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                학번 *
              </label>
              <input
                type="text"
                name="studentId"
                value={formData.studentId}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="학번을 입력하세요"
              />
            </div>

            {/* 대학교 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                대학교 *
              </label>
              <select
                name="university"
                value={formData.university}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">대학교를 선택하세요</option>
                <option value="seoul">서울대학교</option>
                <option value="yonsei">연세대학교</option>
                <option value="korea">고려대학교</option>
              </select>
            </div>

            {/* 전화번호 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                전화번호
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="전화번호를 입력하세요"
              />
            </div>

            {/* 상태 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                상태 *
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="active">활성</option>
                <option value="inactive">비활성</option>
                <option value="suspended">정지</option>
              </select>
            </div>
          </div>

          {/* 버튼 영역 */}
          <div className="flex justify-end space-x-4 pt-6 border-t">
            <button
              type="button"
              onClick={() => navigate('/admin/member')}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              취소
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {isEdit ? '수정' : '등록'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MemberForm; 