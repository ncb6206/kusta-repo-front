/**
 * 공통 데이터 테이블 컴포넌트
 * 다양한 관리 페이지에서 재사용 가능한 테이블 컴포넌트입니다
 */

import { ReactNode } from 'react';

/** 테이블 컬럼 정의 인터페이스 */
interface TableColumn {
  /** 컬럼 키 */
  key: string;
  /** 컬럼 제목 */
  title: string;
  /** 컬럼 너비 클래스 (선택사항) */
  width?: string;
}

/** 테이블 데이터 행 인터페이스 */
interface TableRow {
  /** 행의 고유 ID */
  id: string | number;
  /** 행 데이터 (키-값 쌍) */
  [key: string]: unknown;
}

/** DataTable 컴포넌트의 props 인터페이스 */
interface DataTableProps {
  /** 테이블 컬럼 정의 배열 */
  columns: TableColumn[];
  /** 테이블 데이터 배열 */
  data: TableRow[];
  /** 각 행에 대한 액션 버튼을 렌더링하는 함수 (선택사항) */
  renderActions?: (row: TableRow) => ReactNode;
  /** 로딩 상태 */
  loading?: boolean;
  /** 빈 데이터일 때 표시할 메시지 */
  emptyMessage?: string;
}

/**
 * 공통 데이터 테이블 컴포넌트
 * @param props DataTable 컴포넌트의 props
 * @return JSX 엘리먼트
 */
const DataTable = ({
  columns,
  data,
  renderActions,
  loading = false,
  emptyMessage = '데이터가 없습니다.',
}: DataTableProps) => {
  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow p-8 text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-2 text-gray-500">로딩 중...</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
                  column.width || ''
                }`}
              >
                {column.title}
              </th>
            ))}
            {renderActions && (
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                관리
              </th>
            )}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length + (renderActions ? 1 : 0)}
                className="px-6 py-12 text-center text-gray-500"
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                {columns.map((column) => (
                  <td key={column.key} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {String(row[column.key] || '-')}
                  </td>
                ))}
                {renderActions && (
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {renderActions(row)}
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable; 