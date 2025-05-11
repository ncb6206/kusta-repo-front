import { FaStar } from 'react-icons/fa';

const ProfileCard = () => (
  <div className="mx-auto w-full max-w-xl rounded-3xl bg-white p-8 shadow-lg">
    {/* 상단: 제목 + 별 */}
    <div className="mb-4 flex items-center justify-between">
      <span className="text-xl font-bold text-black">프로필</span>
      <FaStar className="text-main text-2xl" />
    </div>
    <hr className="border-gray3 mb-6" />
    {/* 본문 */}
    <div className="flex items-center gap-6">
      {/* 프로필 이미지 */}
      <div className="flex-shrink-0">
        {/* 유저 아이콘 (SVG) */}
        <img src="/user.svg" alt="한국대학스키연맹" className="h-28 w-28" />
      </div>
      {/* 정보 */}
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex items-center gap-2">
          <span className="bg-main/10 text-main rounded-full px-4 py-1 text-sm font-medium">
            스키대학교 의과대학 25
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-2xl font-extrabold text-black">김스키</span>
          <span className="bg-gray3 inline-block h-8 w-8 rounded-full" />
        </div>
        <div className="text-gray1 text-base font-medium">성별: 남</div>
      </div>
    </div>
  </div>
);

export default ProfileCard;
