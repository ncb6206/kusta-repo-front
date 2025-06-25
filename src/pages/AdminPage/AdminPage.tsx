/**
 * 관리자 페이지 메인 컴포넌트
 * 회원관리, 대회관리, 기록관리 탭을 제공합니다
 */

import { useState } from 'react';
import AdminTabs from './components/AdminTabs';
import MemberManagement from './components/MemberManagement';
import CompetitionManagement from './components/CompetitionManagement';
import RecordManagement from './components/RecordManagement';

/** 관리자 페이지에서 사용할 수 있는 탭 타입들 */
type TabType = 'member' | 'competition' | 'record';

/**
 * 관리자 페이지 컴포넌트
 * 탭 기반으로 다양한 관리 기능을 제공합니다
 * @return JSX 엘리먼트
 */
const AdminPage = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<TabType>('member');

  /**
   * 현재 활성화된 탭에 따라 해당하는 컴포넌트를 반환합니다
   * @return 선택된 탭에 맞는 관리 컴포넌트
   */
  const renderTabContent = (): JSX.Element => {
    switch (activeTab) {
      case 'member':
        return <MemberManagement />;
      case 'competition':
        return <CompetitionManagement />;
      case 'record':
        return <RecordManagement />;
      default:
        return <MemberManagement />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">관리자 페이지</h1>
          <p className="text-gray-600">대학생 프로그래밍 대회 관리 시스템</p>
        </div>
        
        <AdminTabs activeTab={activeTab} onTabChange={setActiveTab} />
        
        <div className="mt-8">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default AdminPage; 