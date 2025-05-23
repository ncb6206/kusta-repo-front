import SearchBar from '@/components/common/SearchBar';
import ProfileCard from '@/components/profile/ProfileCard';
import ActivityHistoryCard from '@/components/profile/ActivityHistoryCard';
import CompetitionHistoryCard from '@/components/profile/CompetitionHistoryCard';
import CompetitionResultCard from '@/components/profile/CompetitionResultCard';

const SearchProfilePage = () => {
  return (
    <div className="bg-gray4 flex min-h-screen flex-col items-center">
      {/* 상단 */}
      <div className="w-full bg-gradient-to-b from-[#EAF4FF] to-transparent py-8 pt-48">
        <div className="mx-auto flex max-w-5xl flex-col items-center px-4">
          <p className="mb-8 text-center text-3xl font-bold text-black">프로필 검색</p>
          <SearchBar />
        </div>
      </div>
      {/* 본문 */}
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-4 py-10 lg:flex-row">
        <div className="flex w-full flex-col gap-6 lg:w-1/3">
          <ProfileCard />
          <ActivityHistoryCard />
          <CompetitionHistoryCard />
        </div>
        <div className="flex flex-1 flex-col gap-6">
          <CompetitionResultCard />
        </div>
      </div>
    </div>
  );
};

export default SearchProfilePage;
