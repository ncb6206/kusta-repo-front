// 그래프 영역은 recharts, chart.js 등 라이브러리로 구현
import { GoChevronUp } from 'react-icons/go';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

const chartData = [
  { name: '순위10/100', value: 70, label: '1차', time: '1:00:00', rank: '10/100' },
  { name: '순위5/100', value: 40, label: '2차', time: '1:00:00', rank: '5/100' },
  { name: '순위4/100', value: 10, label: '합산', time: '1:00:00', rank: '4/100' },
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
      <div className="relative overflow-hidden rounded-xl bg-white">
        {/* 파란색 그라데이션 배경 */}
        <div className="relative z-10">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={chartData} margin={{ top: 20, right: 15, left: 5, bottom: 0 }}>
              <defs>
                <linearGradient id="blueGradient" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" stopColor="#0473FF" stopOpacity={0.1} />
                  <stop offset="10%" stopColor="#0473FF" stopOpacity={0.02} />
                  <stop offset="30%" stopColor="#0473FF" stopOpacity={0} />
                </linearGradient>
                <clipPath id="clipAboveLine">
                  <rect x="0" y="70%" width="97%" height="30%" />
                </clipPath>
              </defs>
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={false}
                height={0}
                padding={{ left: 40, right: 40 }}
              />
              <YAxis
                domain={[0, 80]}
                reversed
                axisLine={false}
                tickLine={false}
                ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80]}
                tick={{ fill: '#666', fontSize: 10 }}
                width={35}
                tickFormatter={() => '00:01'}
              />
              <CartesianGrid vertical={false} horizontal={true} opacity={0.2} />
              <Tooltip />
              {/* 파란색 그라데이션 영역 */}
              <rect
                x="40"
                y="0"
                width="100%"
                height="100%"
                fill="url(#blueGradient)"
                clipPath="url(#clipAboveLine)"
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#0473FF"
                strokeWidth={1.5}
                dot={(props) => {
                  const { cx, cy, index } = props;
                  const label = chartData[index].label;
                  return (
                    <g>
                      <circle
                        cx={cx}
                        cy={cy}
                        r={4}
                        fill="white"
                        stroke="#0473FF"
                        strokeWidth={1.5}
                      />
                      <text
                        x={cx}
                        y={cy - 10}
                        textAnchor="middle"
                        fill="#0473FF"
                        fontSize={12}
                        fontWeight={500}
                      >
                        {label}
                      </text>
                    </g>
                  );
                }}
                activeDot={false}
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-4 mr-8 ml-12 flex justify-between text-xs">
            {chartData.map((d, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="font-medium text-blue-600">순위 {d.rank}</span>
                <span className="text-gray-800">{d.time}</span>
              </div>
            ))}
          </div>
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
