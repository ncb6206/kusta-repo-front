/**
 * 관리자 페이지 메인 진입점
 * 관리자 관련 모든 라우팅을 담당합니다
 */

import { Outlet } from 'react-router-dom';
import AdminLayout from './layout';

/**
 * 관리자 페이지 컴포넌트
 * AdminLayout으로 감싸서 일관된 레이아웃을 제공합니다
 * @return React 컴포넌트
 */
const AdminPage = () => {
  return (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  );
};

export default AdminPage; 