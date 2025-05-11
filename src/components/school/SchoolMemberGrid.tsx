import { RxExternalLink } from 'react-icons/rx';

interface Member {
  name: string;
  info: string;
}

interface SchoolMemberGridProps {
  members: Member[];
}

const SchoolMemberGrid: React.FC<SchoolMemberGridProps> = ({ members }) => (
  <div className="flex flex-col items-center">
    <p className="text-main text-sm font-normal">Members</p>
    <p className="text-xl font-bold">팀원</p>
    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {members.map((m, i) => (
        <div
          key={i}
          className="flex items-center justify-center gap-4 rounded-xl bg-white px-7 py-5 shadow"
        >
          <div className="flex items-center justify-center rounded-full">
            <img src="/user.svg" alt="한국대학스키연맹" className="h-12" />
          </div>
          <div className="flex flex-col items-start gap-1">
            <div className="text-sm font-bold">{m.name}</div>
            <div className="text-gray2 text-xs">{m.info}</div>
          </div>
          <div className="ml-6 flex h-full items-start">
            <RxExternalLink className="text-gray2 cursor-pointer" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SchoolMemberGrid;
