/**
 * 검색 및 필터 컴포넌트
 * 다양한 검색 조건과 필터링 옵션을 제공합니다
 */

import { ReactNode } from 'react';

/** 필터 옵션 인터페이스 */
interface FilterOption {
  /** 옵션 값 */
  value: string;
  /** 옵션 라벨 */
  label: string;
}

/** SearchFilter 컴포넌트의 props 인터페이스 */
interface SearchFilterProps {
  /** 검색어 값 */
  searchValue: string;
  /** 검색어 변경 핸들러 */
  onSearchChange: (value: string) => void;
  /** 검색어 플레이스홀더 */
  searchPlaceholder?: string;
  /** 필터 옵션들 */
  filters?: Array<{
    /** 필터 키 */
    key: string;
    /** 필터 라벨 */
    label: string;
    /** 필터 옵션들 */
    options: FilterOption[];
    /** 현재 선택된 값 */
    value: string;
    /** 값 변경 핸들러 */
    onChange: (value: string) => void;
  }>;
  /** 검색 버튼 클릭 핸들러 */
  onSearch?: () => void;
  /** 리셋 버튼 클릭 핸들러 */
  onReset?: () => void;
  /** 추가 액션 버튼들 */
  additionalActions?: ReactNode;
}

/**
 * 검색 및 필터 컴포넌트
 * @param props SearchFilter 컴포넌트의 props
 * @return JSX 엘리먼트
 */
const SearchFilter = ({
  searchValue,
  onSearchChange,
  searchPlaceholder = '검색어를 입력하세요',
  filters = [],
  onSearch,
  onReset,
  additionalActions,
}: SearchFilterProps) => {
  /**
   * 엔터 키 입력 핸들러
   * @param e 키보드 이벤트
   */
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSearch) {
      onSearch();
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6">
      <div className="grid grid-cols-1 gap-4">
        {/* 첫 번째 행: 검색어 입력 */}
        <div className="flex gap-4">
          <div className="flex-1">
            <input
              type="text"
              value={searchValue}
              onChange={(e) => onSearchChange(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={searchPlaceholder}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex gap-2">
            {onSearch && (
              <button
                onClick={onSearch}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                검색
              </button>
            )}
            {onReset && (
              <button
                onClick={onReset}
                className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors"
              >
                초기화
              </button>
            )}
          </div>
        </div>

        {/* 두 번째 행: 필터 옵션들 */}
        {filters.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filters.map((filter) => (
              <div key={filter.key}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {filter.label}
                </label>
                <select
                  value={filter.value}
                  onChange={(e) => filter.onChange(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {filter.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        )}

        {/* 세 번째 행: 추가 액션 버튼들 */}
        {additionalActions && (
          <div className="flex justify-end">
            {additionalActions}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchFilter; 