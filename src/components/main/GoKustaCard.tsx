import { RxExternalLink } from 'react-icons/rx';
import { Link } from 'react-router-dom';

interface GoKustaCardProps {
  icon: React.ReactNode;
  label: string;
  link: string;
}

const GoKustaCard: React.FC<GoKustaCardProps> = ({ icon, label, link }) => (
  <Link
    to={link}
    target="_blank"
    rel="noopener noreferrer"
    className="relative mx-auto flex w-full max-w-xs flex-col items-center justify-center rounded-2xl bg-white p-8 shadow transition hover:shadow-lg"
  >
    <RxExternalLink className="absolute top-4 right-4 text-xs text-gray-400" />
    <div className="flex h-full w-full justify-center py-8">{icon}</div>
    <div className="font-semibold">{label}</div>
  </Link>
);

export default GoKustaCard;
