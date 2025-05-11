import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed z-50 w-full bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <img src="/logo.svg" alt="한국대학스키연맹" className="h-4" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden space-x-8 md:flex">
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? 'border-b-1 border-black font-bold text-black!' : ''
              }
            >
              프로필 검색
            </NavLink>
            <NavLink
              to="/school"
              className={({ isActive }) =>
                isActive ? 'border-b-1 border-black font-bold text-black!' : ''
              }
            >
              학교 소개
            </NavLink>
            <Link to="https://www.kusta.or.kr" target="_blank" rel="noopener noreferrer">
              KUSTA 바로가기
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <GiHamburgerMenu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <div className="flex flex-col space-y-4">
              <Link to="/profile" className="text-black!">
                프로필 검색
              </Link>
              <Link to="/school" className="text-black!">
                학교 소개
              </Link>
              <Link
                to="https://www.kusta.or.kr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black!"
              >
                KUSTA 바로가기
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
