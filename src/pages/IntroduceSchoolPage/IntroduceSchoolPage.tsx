import { useState } from 'react';

import SearchBar from '@/components/common/SearchBar';
import Pagination from '@/components/common/Pagination';
import SchoolCardGrid from '@/components/school/SchoolCardGrid';
import WinnerTeamCard from '@/components/school/WinnerTeamCard';

const dummySchools = Array.from({ length: 20 }, (_, i) => ({
  name: i === 1 ? '스기대학교 스키팀' : '스기대학교 스키팀',
}));

const IntroduceSchoolPage = () => {
  const [page, setPage] = useState(1);

  // 페이지네이션 예시 (한 페이지 10개)
  const perPage = 10;
  const total = Math.ceil(dummySchools.length / perPage);
  const schools = dummySchools.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="bg-gray4 flex min-h-screen flex-col items-center">
      {/* 상단 */}
      <div className="w-full bg-gradient-to-b from-[#EAF4FF] to-transparent py-8 pt-48">
        <div className="mx-auto flex max-w-5xl flex-col items-center px-4">
          <p className="mb-8 text-center text-4xl font-bold text-black">학교 소개</p>
          <SearchBar />
        </div>
      </div>
      {/* 카드 그리드 */}
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center gap-4 px-4 py-10">
        <WinnerTeamCard />
        <SchoolCardGrid schools={schools} />
        <Pagination current={page} total={total} onChange={setPage} />
      </div>
    </div>
  );
};

export default IntroduceSchoolPage;
