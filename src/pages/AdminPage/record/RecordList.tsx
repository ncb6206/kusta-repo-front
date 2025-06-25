/**
 * 기록 목록 페이지 컴포넌트
 */

import { Link } from 'react-router-dom';

const RecordList = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">기록 관리</h2>
          <p className="text-gray-600 mt-1">대회 기록들을 관리합니다</p>
        </div>
        <Link
          to="/admin/record/new"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          + 기록 등록
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                대회명
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                참가자
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                순위
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                점수
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                관리
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                2024 춘계 대회
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                홍길동
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                3위
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                850점
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <Link to="/admin/record/1" className="text-blue-600 hover:text-blue-900 mr-3">
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

export default RecordList; 