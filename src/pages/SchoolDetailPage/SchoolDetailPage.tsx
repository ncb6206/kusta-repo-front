import { useState } from 'react';
import { useParams } from 'react-router-dom';

import SchoolLogoCard from '@/components/school/SchoolLogoCard';
import SchoolTabMenu from '@/components/school/SchoolTabMenu';
import SchoolInfoCard from '@/components/school/SchoolInfoCard';
import SchoolMemberGrid from '@/components/school/SchoolMemberGrid';
import SchoolAwardHistory from '@/components/school/SchoolAwardHistory';
import { useUniversityQuery } from '@/hooks/api/useUniversityQuery';

const dummyDescription = `○○대학교 스키팀은 겨울 스포츠에 대한 열정으로 모인 학생들이 함께 훈련하고 성장하는 동아리입니다.
설원 위에서 기술을 연마하며 전국 대회 출전을 목표로 실력을 키워가고 있으며, 초보자부터 상급자까지 모두가 함께 즐기고 도전하는
분위기를 지향합니다. 시즌 중에는 정기적인 훈련과 대회를 통해 팀워크를 다지고, 시즌 외에는 체력 훈련과 친목 활동을 통해 유대감을 쌓습니다.
스키에 대한 사랑과 열정을 가진 여러분을 기다립니다!`;

const dummyMembers = Array.from({ length: 20 }, () => ({
  name: '김스키',
  info: '스기대학교 25학번',
}));

const dummyAwards = [
  {
    year: '1999',
    items: [
      { month: '04', desc: '내용' },
      { month: '09', desc: '내용' },
    ],
  },
  {
    year: '2001',
    items: [
      { month: '03', desc: '내용' },
      { month: '05', desc: '내용' },
    ],
  },
];

const SchoolDetailPage = () => {
  const { schoolId } = useParams();
  const { UniversityData } = useUniversityQuery(String(schoolId));
  const [tab, setTab] = useState('팀소개');

  return (
    <div className="flex min-h-screen flex-col items-center">
      <div className="w-full bg-gradient-to-b from-[#EAF4FF] to-transparent pt-48 text-center">
        <p className="text-2xl font-bold">학교 소개</p>
        <div className="mx-auto flex max-w-5xl flex-col items-center px-4">
          <SchoolLogoCard teamName={UniversityData?.data.universityKor} />
        </div>
      </div>
      <div className="flex w-full max-w-5xl flex-col items-center px-4">
        <SchoolTabMenu tab={tab} setTab={setTab} />
        <div className="flex flex-col gap-32 py-8">
          <SchoolInfoCard description={dummyDescription} />
          <SchoolMemberGrid members={dummyMembers} />
          <SchoolAwardHistory awards={dummyAwards} />
        </div>
      </div>
    </div>
  );
};

export default SchoolDetailPage;
