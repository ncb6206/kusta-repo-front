// 그래프 영역은 recharts, chart.js 등 라이브러리로 구현
import { GoChevronUp } from 'react-icons/go';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = [
  { name: '순위 10/100', value: 10, label: '1차' },
  { name: '순위 5/100', value: 20, label: '2차' },
  { name: '순위 4/100', value: 30, label: '확정' },
];

const ranking = [
  { rank: 3, bib: 214, name: '우종호', time: '59:00:00', highlight: false },
  { rank: 4, bib: 250, name: '김스키', time: '1:00:00', highlight: true },
  { rank: 5, bib: 240, name: '김혜경', time: '1:10:00', highlight: false },
];

const CompetitionResultCard = () => (
  <div className="mx-auto w-full max-w-xl rounded-3xl bg-white p-8 shadow-lg">
    {/* 상단 */}
    <div className="mb-2 text-xl font-bold text-black">대회 결과</div>
    <hr className="border-gray3 mb-6" />
    <div className="mb-4 flex items-center justify-between gap-2">
      <span className="text-main text-base font-bold">제77회 KUSTA CUP 전국대학스키대회</span>
      <GoChevronUp className="cursor-pointer" />
    </div>
    {/* 종목/날짜/장소/코스 */}
    <div className="border-main mb-6 flex flex-wrap items-center justify-center gap-2 rounded-md border px-6 py-5 text-sm font-medium">
      <span>
        🏂 종목 <span className="font-normal">GS</span>
      </span>
      <span className="text-main">|</span>
      <span>
        📅 날짜 <span className="font-normal">25/02/01</span>
      </span>
      <span className="text-main">|</span>
      <span>
        📍 장소 <span className="font-normal">스키장</span>
      </span>
      <span className="text-main">|</span>
      <span>
        ⛷️ 코스 <span className="font-normal">스키 코스</span>
      </span>
    </div>
    {/* 기록 탭 + 그래프 */}
    <div className="mb-6">
      <div className="mb-2 flex gap-2">
        <span className="text-xl font-bold">기록</span>
        <div className="flex items-center rounded-[50px] bg-neutral-200/50 px-2.5 py-1 font-semibold text-neutral-600">
          분류 1부
        </div>
        <div className="flex items-center rounded-[50px] bg-neutral-200/50 px-2.5 py-1 font-semibold text-neutral-600">
          BIB 250
        </div>
      </div>
      <div className="bg-gray4 rounded-xl p-4">
        <ResponsiveContainer width="100%" height={180}>
          <LineChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis hide />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#0473FF" strokeWidth={2} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
        <div className="text-gray1 mt-2 flex justify-between text-xs">
          {chartData.map((d, i) => (
            <span key={i}>{d.label}</span>
          ))}
        </div>
      </div>
    </div>
    <hr className="border-gray3 mb-6" />
    {/* 현재 종합 랭킹 */}
    <div className="mb-2 text-base font-bold text-black">현재 종합 랭킹</div>
    <hr className="border-gray3 mb-6" />
    <ul className="flex flex-col gap-2">
      {ranking.map((item) => (
        <li
          key={item.rank}
          className={`flex items-center gap-2 rounded-xl px-3 py-2 text-base ${
            item.highlight ? 'bg-gray4 text-main font-bold' : ''
          }`}
        >
          <span className="text-main font-bold">{item.rank}위</span>
          <span className="text-gray1">BIB {item.bib}</span>
          <span className="text-gray1">{item.name}</span>
          <span className="text-gray1 ml-auto">{item.time}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default CompetitionResultCard;
