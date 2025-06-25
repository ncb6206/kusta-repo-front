/**
 * 학교 목록 페이지 컴포넌트
 * 등록된 학교 목록 조회 및 관리 기능을 제공합니다
 */

import { Link } from 'react-router-dom';

const SchoolList = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">학교 관리</h2>
          <p className="text-gray-600 mt-1">등록된 학교들을 관리합니다</p>
        </div>
        <Link
          to="/admin/school/new"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          + 학교 등록
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                학교명
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                지역
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                회원수
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                관리
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                서울대학교
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                서울
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                150명
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <Link to="/admin/school/1" className="text-blue-600 hover:text-blue-900 mr-3">
                  상세
                </Link>
                <button className="text-red-600 hover:text-red-900">삭제</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SchoolList; 