interface Award {
  year: string;
  items: { month: string; desc: string }[];
}

interface SchoolAwardHistoryProps {
  awards: Award[];
}

const SchoolAwardHistory: React.FC<SchoolAwardHistoryProps> = ({ awards }) => (
  <div className="flex flex-col items-center">
    <p className="text-main text-sm font-normal">Awards</p>
    <p className="text-xl font-bold">수상내역</p>
    <div className="mt-6 w-full max-w-4xl">
      <div className="relative">
        {/* 세로선 */}
        <div className="bg-gray3 absolute top-3 left-[5px] z-0 h-full w-0.5" />
        <div className="flex flex-col gap-12">
          {awards.map((award, i) => (
            <div key={i} className="relative flex items-start">
              {/* 파란 점 */}
              <div className="z-10 flex flex-col items-center">
                <div className="bg-main mt-1 h-3 w-3 rounded-full" />
                {/* 마지막이 아니면 세로선 연장 */}
                {i !== awards.length - 1 && <div className="bg-main/30 mt-1 w-0.5 flex-1" />}
              </div>
              {/* 연도 및 카드 */}
              <div className="ml-8 flex-1">
                <div className="mb-2 font-bold">{award.year}</div>
                <div className="bg-main2 space-y-2 rounded-xl p-6">
                  {award.items.map((item, j) => (
                    <div key={j} className="mb-2 rounded-xl text-base">
                      <span className="mr-2 font-medium">{item.month}</span>
                      <span className="text-gray1">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default SchoolAwardHistory;
