interface SchoolInfoCardProps {
  description: string;
}

const SchoolInfoCard: React.FC<SchoolInfoCardProps> = ({ description }) => (
  <div className="flex flex-col items-center gap-1">
    <p className="text-main text-sm font-normal">Information</p>
    <p className="text-xl font-bold">팀소개</p>
    <div className="mt-6 mb-8 rounded-xl bg-[#EAF4FF] px-20 py-12 text-base leading-relaxed text-black">
      {description}
    </div>
  </div>
);

export default SchoolInfoCard;
