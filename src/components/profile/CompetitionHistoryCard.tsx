const participation = [
  {
    text: (
      <>
        김스키님의 대회 참여 횟수는 <span className="text-main font-bold">7번</span> 입니다.
      </>
    ),
  },
  {
    text: (
      <>
        김스키님의 행사 참여 횟수는 <span className="text-main font-bold">10번</span> 입니다.
      </>
    ),
  },
  {
    text: (
      <>
        김스키님의 최고기록은 <span className="text-main font-bold">----</span> 입니다.
      </>
    ),
  },
];

const scores = [
  { label: '대회 참여', value: 2450, diff: 50 },
  { label: '--- 참여', value: 2400, diff: 30 },
  { label: '------ 참여', value: 2370, diff: 50 },
  { label: '------- 참여', value: 2320, diff: 50 },
  { label: '대회 참여', value: 2270, diff: 50 },
];

const CompetitionHistoryCard = () => (
  <div className="mx-auto w-full max-w-xl rounded-3xl bg-white p-8 shadow-lg">
    {/* 상단 */}
    <div className="mb-4 text-xl font-bold text-black">대회 참여 내역</div>
    <hr className="border-gray3 mb-6" />
    {/* 참여 내역 */}
    <ul className="mb-8 flex flex-col gap-2 text-base">
      {participation.map((item, idx) => (
        <li key={idx} className="text-gray1 flex items-center gap-2">
          <span className="bg-main inline-block h-2 w-2 rounded-full" />
          {item.text}
        </li>
      ))}
    </ul>
    <hr className="border-gray3 mb-6" />
    {/* 연맹 활동 점수 */}
    <div className="mb-4 flex items-center justify-between">
      <span className="text-lg font-bold text-black">연맹 활동 점수</span>
      <span className="text-main text-2xl font-bold">2500</span>
    </div>
    <hr className="border-gray3 mb-6" />
    {/* 점수 내역 */}
    <ul className="mb-8 flex flex-col gap-2 text-base">
      {scores.map((item, idx) => (
        <li key={idx} className="text-gray1 flex items-center gap-2">
          <span className="bg-main inline-block h-2 w-2 rounded-full" />
          <span className="flex-1">{item.label}</span>
          <span className="mr-2">{item.value}</span>
          <span className="font-bold text-red-500">+{item.diff}</span>
        </li>
      ))}
    </ul>
    <hr className="border-gray3 mb-4" />
    {/* 더보기 버튼 */}
    <div className="flex justify-center">
      <button className="text-gray1 text-lg font-bold">더보기</button>
    </div>
  </div>
);

export default CompetitionHistoryCard;
