import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Record } from '@/types/member';

const chartData = [
  {
    record1st: '22.22',
    record2nd: '33.33',
    bibNo: 1,
    ranking: 1,
    totalRecord: '55.55',
    higherRankRecord: null,
    lowerRankRecord: '00:00:00',
    higherRankInfo: null,
    lowerRankInfo: {
      memberName: '강원호',
      bibNo: 2,
      totalRecord: '00:00:00',
    },
    race: {
      raceTitle: '제 21회 한국대학스키연맹 회장배 전국의과대학스키대회',
      raceType: 'GS',
      raceDate: '2025-06-20T09:45:52',
      divisionType: '의대배',
    },
  },
  {
    record1st: '33.33',
    record2nd: '44.44',
    bibNo: 100,
    ranking: 1,
    totalRecord: '77.77',
    higherRankRecord: null,
    lowerRankRecord: null,
    higherRankInfo: null,
    lowerRankInfo: null,
    race: {
      raceTitle: '제 21회 한국대학스키연맹 회장배 전국의과대학스키대회',
      raceType: 'GS',
      raceDate: '2025-06-20T09:45:52',
      divisionType: '의대배',
    },
  },
];

interface RaceAccordionProps {
  record?: Record;
  name?: string;
}

const RaceAccordion = ({ record, name }: RaceAccordionProps) => {
  return (
    <AccordionItem value="item-1">
      <AccordionTrigger className="text-main font-bol text-base">
        {record?.race.raceTitle}
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        {/* 종목/날짜/장소/코스 */}
        <div className="border-main mb-6 flex flex-wrap items-center justify-center gap-2 rounded-md border px-6 py-5 text-sm font-medium">
          <span>
            🏂 종목 <span className="font-normal">{record?.race.raceTitle}</span>
          </span>
          <span className="text-main">|</span>
          <span>
            📅 날짜 <span className="font-normal">{record?.race.raceDate.slice(0, 10)}</span>
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
              BIB {record?.bibNo}
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
                      const { cx, cy } = props;
                      // const { cx, cy, index } = props;
                      const label = 0;
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
                    <span className="font-medium text-blue-600">순위 {d.ranking}</span>
                    <span className="text-gray-800">{d.totalRecord}</span>
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
          {record?.higherRankInfo && (
            <li
              key={record?.higherRankInfo.memberName}
              className={`bg-gray4 text-main flex items-center gap-2 rounded-xl px-3 py-2 text-base font-bold`}
            >
              <span className="text-main font-bold">{record?.higherRankInfo.bibNo}위</span>
              <span className="text-gray1">BIB {record?.higherRankInfo.bibNo}</span>
              <span className="text-gray1">{record?.higherRankInfo.memberName}</span>
              <span className="text-gray1 ml-auto">{record?.higherRankInfo.totalRecord}</span>
            </li>
          )}
          <li
            key={name}
            className={`bg-gray4 text-main flex items-center gap-2 rounded-xl px-3 py-2 text-base font-bold`}
          >
            <span className="text-main font-bold">{record?.ranking}위</span>
            <span className="text-gray1">BIB {record?.bibNo}</span>
            <span className="text-gray1">{name}</span>
            <span className="text-gray1 ml-auto">{record?.totalRecord}</span>
          </li>
          {record?.lowerRankInfo && (
            <li
              key={record?.lowerRankInfo.memberName}
              className={`bg-gray4 text-main flex items-center gap-2 rounded-xl px-3 py-2 text-base font-bold`}
            >
              <span className="text-main font-bold">{record?.lowerRankInfo.bibNo}위</span>
              <span className="text-gray1">BIB {record?.lowerRankInfo.bibNo}</span>
              <span className="text-gray1">{record?.lowerRankInfo.memberName}</span>
              <span className="text-gray1 ml-auto">{record?.lowerRankInfo.totalRecord}</span>
            </li>
          )}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
};

export default RaceAccordion;
