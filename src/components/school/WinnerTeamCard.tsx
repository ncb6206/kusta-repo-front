import { PiMedalFill } from 'react-icons/pi';

const winnerData = [
  {
    label: '연맹배',
    results: [
      {
        type: '남자부 우승',
        team: '스키대학교 스키팀',
        icon: <PiMedalFill className="h-5 w-4 text-[#FFB338]" />,
        logo: '로고',
      },
      {
        type: '남자부 준우승',
        team: '스키대학교 스키팀',
        icon: <PiMedalFill className="text-gray2 h-5 w-4" />,
        logo: '로고',
      },
      {
        type: '여자부 우승',
        team: '스키대학교 스키팀',
        icon: <PiMedalFill className="h-5 w-4 text-[#FFB338]" />,
        logo: '로고',
      },
      {
        type: '여자부 준우승',
        team: '스키대학교 스키팀',
        icon: <PiMedalFill className="text-gray2 h-5 w-4" />,
        logo: '로고',
      },
    ],
  },
  {
    label: '의대배',
    results: [
      {
        type: '남자부 우승',
        team: '스키대학교 스키팀',
        icon: <PiMedalFill className="h-5 w-4 text-[#FFB338]" />,
        logo: '로고',
      },
      {
        type: '남자부 준우승',
        team: '스키대학교 스키팀',
        icon: <PiMedalFill className="text-gray2 h-5 w-4" />,
        logo: '로고',
      },
      {
        type: '여자부 우승',
        team: '스키대학교 스키팀',
        icon: <PiMedalFill className="h-5 w-4 text-[#FFB338]" />,
        logo: '로고',
      },
      {
        type: '여자부 준우승',
        team: '스키대학교 스키팀',
        icon: <PiMedalFill className="text-gray2 h-5 w-4" />,
        logo: '로고',
      },
    ],
  },
];

const WinnerTeamCard = () => (
  <div className="mx-auto w-full max-w-6xl rounded-3xl bg-white p-8 shadow-lg">
    {/* 상단 */}
    <div className="mb-4 flex items-center gap-2 text-2xl font-bold text-black">
      <PiMedalFill className="text-main" />
      이번 시즌 우승팀
    </div>
    <hr className="border-gray3 mb-6" />
    {/* 대회별 우승팀 */}
    <div className="flex flex-col gap-8">
      {winnerData.map((row, i) => (
        <div key={i}>
          <div className="flex items-center gap-12">
            {/* 대회명 뱃지 */}
            <span className="bg-main/10 text-main rounded-full px-5 py-2 text-lg font-bold">
              {row.label}
            </span>
            {/* 결과들 */}
            <div className="flex flex-1 flex-wrap gap-16">
              {row.results.map((result, j) => (
                <div key={j} className="flex min-w-[180px] flex-row items-start gap-2">
                  <div className="flex items-center gap-2">{result.icon}</div>
                  <div className="flex flex-col items-start gap-2">
                    <span className={`font-bold`}>{result.type}</span>
                    <div className="flex items-center gap-2">
                      <div className="text-gray1 text-sm font-medium">{result.team}</div>
                      <div className="bg-gray3 text-gray1 mt-1 flex h-8 w-8 items-center justify-center rounded-full text-xs">
                        로고
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* 대회별 구분선 (마지막 제외) */}
          {i !== winnerData.length - 1 && <hr className="border-gray3 my-8 border-dashed" />}
        </div>
      ))}
    </div>
  </div>
);

export default WinnerTeamCard;
