/**
 * 관리자 페이지의 탭 네비게이션 컴포넌트
 * 회원관리, 대회관리, 기록관리 탭 간 전환을 제공합니다
 */

/** 탭 타입 정의 */
type TabType = 'member' | 'competition' | 'record';

/** AdminTabs 컴포넌트의 props 인터페이스 */
interface AdminTabsProps {
  /** 현재 활성화된 탭 */
  activeTab: TabType;
  /** 탭 변경 시 호출되는 콜백 함수 */
  onTabChange: (tab: TabType) => void;
}

/**
 * 관리자 페이지 탭 네비게이션 컴포넌트
 * @param props AdminTabs 컴포넌트의 props
 * @return JSX 엘리먼트
 */
const AdminTabs = ({ activeTab, onTabChange }: AdminTabsProps) => {
  /** 탭 목록 정의 */
  const tabs = [
    { id: 'member' as const, label: '회원관리', icon: '👥' },
    { id: 'competition' as const, label: '대회관리', icon: '🏆' },
    { id: 'record' as const, label: '기록관리', icon: '📊' },
  ];

  return (
    <div className="border-b border-gray-200">
      <nav className="-mb-px flex space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
              activeTab === tab.id
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <span>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default AdminTabs; 