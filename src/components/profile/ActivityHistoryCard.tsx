const activities = [
  { year: '24/25', desc: '스키대학교 주장' },
  { year: '23/24', desc: '스키대학교 훈련부장' },
  { year: '22/23', desc: '스키대학교 신입생' },
];

const ActivityHistoryCard = () => (
  <div className="mx-auto w-full max-w-xl rounded-3xl bg-white p-8 shadow-lg">
    {/* 상단 */}
    <div className="mb-4 text-xl font-bold text-black">활동 내역</div>
    <hr className="border-gray3 mb-6" />
    {/* 활동 리스트 */}
    <div className="flex flex-col gap-4">
      {activities.map((item, idx) => (
        <div key={idx} className="flex items-center gap-3 rounded-2xl bg-blue-50 px-6 py-5">
          <span className="bg-main mr-2 inline-block h-3 w-3 rounded-full" />
          <span className="text-lg font-semibold text-black">
            {item.year} {item.desc}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default ActivityHistoryCard;
