/**
 * 공통 페이지 헤더 컴포넌트
 * 관리 페이지의 상단 헤더 영역을 담당합니다
 */

import { ReactNode } from 'react';

/** PageHeader 컴포넌트의 props 인터페이스 */
interface PageHeaderProps {
  /** 페이지 제목 */
  title: string;
  /** 페이지 설명 (선택사항) */
  description?: string;
  /** 헤더 오른쪽에 표시할 액션 버튼들 (선택사항) */
  actions?: ReactNode;
}

/**
 * 공통 페이지 헤더 컴포넌트
 * @param props PageHeader 컴포넌트의 props
 * @return JSX 엘리먼트
 */
const PageHeader = ({ title, description, actions }: PageHeaderProps) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        {description && <p className="text-gray-600 mt-1">{description}</p>}
      </div>
      {actions && <div className="flex space-x-3">{actions}</div>}
    </div>
  );
};

export default PageHeader; 