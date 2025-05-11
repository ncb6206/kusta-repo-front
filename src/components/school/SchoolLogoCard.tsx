interface SchoolLogoCardProps {
  logoUrl?: string;
  teamName: string;
}

const SchoolLogoCard: React.FC<SchoolLogoCardProps> = ({ logoUrl, teamName }) => (
  <div className="mb-8 flex flex-col items-center">
    <div className="bg-gray3 text-gray2 my-20 flex h-52 w-52 items-center justify-center rounded-full text-2xl">
      {logoUrl ? (
        <img src={logoUrl} alt="학교 로고" className="h-full w-full rounded-full object-cover" />
      ) : (
        '학교 로고'
      )}
    </div>
    <div className="flex flex-col items-center gap-3 text-2xl font-bold">
      <img src="/snowflake.svg" alt="한국대학스키연맹" className="h-6" />
      {teamName}
    </div>
  </div>
);

export default SchoolLogoCard;
