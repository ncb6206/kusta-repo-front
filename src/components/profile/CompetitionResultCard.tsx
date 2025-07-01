import RaceAccordion from '@/components/profile/RaceAccordion';
import { Accordion } from '@/components/ui/accordion';
import { Record } from '@/types/member';

interface CompetitionResultCardProps {
  records?: Record[];
  name?: string;
}

const CompetitionResultCard = ({ records, name }: CompetitionResultCardProps) => (
  <div className="mx-auto w-full max-w-xl rounded-3xl bg-white p-8 shadow-lg">
    {/* 상단 */}
    <div className="mb-2 text-xl font-bold text-black">대회 결과</div>
    <hr className="border-gray3 mb-6" />
    {records &&
      records.map((record) => (
        <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
          <RaceAccordion record={record} name={name} />
        </Accordion>
      ))}
  </div>
);

export default CompetitionResultCard;
