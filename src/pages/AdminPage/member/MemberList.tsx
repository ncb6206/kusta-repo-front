/**
 * 회원 목록 페이지 컴포넌트
 * 회원 목록 조회, 검색, 필터링 기능을 제공합니다
 */

import { Link } from 'react-router-dom';

/**
 * 회원 목록 컴포넌트
 * @return JSX 엘리먼트
 */
const MemberList = () => {
  return (
    <div className="space-y-6">
      {/* 페이지 헤더 */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">회원 관리</h2>
          <p className="text-gray-600 mt-1">등록된 회원들을 관리합니다</p>
        </div>
        <Link
          to="/admin/member/new"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          + 회원 등록
        </Link>
      </div>

      {/* 검색 및 필터 영역 */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="회원명 검색"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">전체 학교</option>
            <option value="seoul">서울대학교</option>
            <option value="yonsei">연세대학교</option>
          </select>
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
            검색
          </button>
        </div>
      </div>

      {/* 회원 목록 테이블 */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                회원명
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                학교
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                학번
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                이메일
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                상태
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                관리
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* 임시 데이터 */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                홍길동
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                서울대학교
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                2021001
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                hong@seoul.ac.kr
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                  활성
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <Link
                  to="/admin/member/1"
                  className="text-blue-600 hover:text-blue-900 mr-3"
                >
                  상세
                </Link>
                <button className="text-red-600 hover:text-red-900">
                  삭제
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MemberList; 