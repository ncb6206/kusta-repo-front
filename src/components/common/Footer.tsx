import { Link } from 'react-router-dom';

import { LINK_PATH } from '@/constants/path';

const Footer = () => (
  <footer className="mt-16 py-8 shadow-2xl/50">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between px-4 py-8 md:flex-row">
      <div className="flex flex-col items-start gap-2 text-sm">
        <img src="/logo.svg" alt="한국대학스키연맹" className="h-4" />
        <div>
          Copyright © <span className="font-black">KUSTAREPO</span> All rights reserved.
        </div>
      </div>
      <div className="mt-2 flex space-x-6 text-sm md:mt-0">
        <span className="font-bold">Link</span>
        <Link to={LINK_PATH.KUSTA} target="_blank" rel="noopener noreferrer">
          KUSTA
        </Link>
        <span className="text-gray2">|</span>
        <Link to={LINK_PATH.YOUTUBE} target="_blank" rel="noopener noreferrer">
          Youtube
        </Link>
        <span className="text-gray2">|</span>
        <Link to={LINK_PATH.INSTAGRAM} target="_blank" rel="noopener noreferrer">
          Instagram
        </Link>
        <span className="text-gray2">|</span>
        <Link to={LINK_PATH.FACEBOOK} target="_blank" rel="noopener noreferrer">
          Facebook
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
