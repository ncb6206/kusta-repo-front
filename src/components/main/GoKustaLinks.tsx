import { LINK_PATH } from '@/constants/path';
import GoKustaCard from '@/components/main/GoKustaCard';
import { FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';

const links = [
  {
    icon: <img src="/kusta.jpg" alt="KUSTA" className="h-24 w-24" />,
    label: 'KUSTA',
    link: LINK_PATH.KUSTA,
  },
  {
    icon: <FaYoutube className="h-24 w-24 text-red-500" />,
    label: 'Youtube',
    link: LINK_PATH.YOUTUBE,
  },
  {
    icon: <FaInstagram className="h-24 w-24 text-pink-500" />,
    label: 'Instagram',
    link: LINK_PATH.INSTAGRAM,
  },
  {
    icon: <FaFacebook className="h-24 w-24 text-blue-500" />,
    label: 'Facebook',
    link: LINK_PATH.FACEBOOK,
  },
];

const GoKustaLinks = () => (
  <section className="py-16">
    <h2 className="mb-10 text-center text-2xl font-bold">GO KUSTA</h2>
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
      {links.map((item, idx) => (
        <GoKustaCard key={idx} {...item} />
      ))}
    </div>
  </section>
);

export default GoKustaLinks;
