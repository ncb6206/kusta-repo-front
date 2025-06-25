/**
 * 관리자 페이지 공통 레이아웃 컴포넌트
 * 사이드바, 헤더, 메인 콘텐츠 영역을 제공합니다
 */

import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

/** AdminLayout 컴포넌트의 props 인터페이스 */
interface AdminLayoutProps {
  /** 레이아웃 내부에 렌더링될 자식 컴포넌트들 */
  children: ReactNode;
}

/**
 * 관리자 페이지 레이아웃 컴포넌트
 * @param props AdminLayout 컴포넌트의 props
 * @return React 컴포넌트
 */
const AdminLayout = ({ children }: AdminLayoutProps) => {
  const location = useLocation();

  /** 네비게이션 메뉴 항목들 */
  const navigationItems = [
    { path: '/admin/member', label: '회원관리', icon: '👥' },
    { path: '/admin/school', label: '학교관리', icon: '🏫' },
    { path: '/admin/record', label: '기록관리', icon: '📊' },
    { path: '/admin/race', label: '대회관리', icon: '🏆' },
  ];

  /**
   * 현재 경로가 활성 상태인지 확인하는 함수
   * @param path 확인할 경로
   * @return 활성 상태 여부
   */
  const isActivePath = (path: string): boolean => {
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="flex">
        {/* 사이드바 */}
        <aside className="w-64 bg-white shadow-md min-h-screen">
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">관리자 메뉴</h2>
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActivePath(item.path)
                      ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* 메인 콘텐츠 영역 */}
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {/* 페이지 헤더 */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">관리자 페이지</h1>
              <p className="text-gray-600">대학생 프로그래밍 대회 관리 시스템</p>
            </div>

            {/* 자식 컴포넌트 렌더링 */}
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout; 