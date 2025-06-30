import { useState, useRef, useEffect } from 'react';
import { IoSearchOutline } from 'react-icons/io5';

import { useSearchHistory } from '@/hooks/common/useSearchHistory';
import SearchDropdown from '@/components/common/SearchDropdown';
import useDebounce from '@/hooks/common/useDebounce';
import { useMemberSearchQuery } from '@/hooks/api/useMemberSearchQuery';

const SearchBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const debouncedValue = useDebounce(searchTerm);
  const { MemberSearchData } = useMemberSearchQuery(debouncedValue);
  const searchBarRef = useRef<HTMLDivElement>(null);

  const {
    recentSearches,
    favorites,
    addRecentSearch,
    toggleFavorite,
    removeRecentSearch,
    removeFavorite,
  } = useSearchHistory();

  // 외부 클릭 감지로 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  // 검색어 선택 핸들러
  const handleSearchSelect = (searchText: string) => {
    setSearchTerm(searchText);
    addRecentSearch(searchText);
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex w-full max-w-md justify-center md:max-w-2xl xl:max-w-3xl">
      <div className="relative w-full" ref={searchBarRef}>
        <input
          type="text"
          placeholder="Search"
          className="bg-opacity-80 w-full rounded-full bg-white px-6 py-4 text-lg shadow focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onClick={() => setIsDropdownOpen(true)}
        />
        <span className="text-gray2 absolute top-1/2 right-5 -translate-y-1/2">
          <IoSearchOutline className="text-main cursor-pointer text-2xl" />
        </span>
        <SearchDropdown
          searchTerm={debouncedValue}
          MemberSearchData={MemberSearchData}
          isOpen={isDropdownOpen}
          onClose={() => setIsDropdownOpen(false)}
          onSearchSelect={handleSearchSelect}
          recentSearches={recentSearches}
          favorites={favorites}
          addRecentSearch={addRecentSearch}
          toggleFavorite={toggleFavorite}
          removeRecentSearch={removeRecentSearch}
          removeFavorite={removeFavorite}
        />
      </div>
    </div>
  );
};

export default SearchBar;
