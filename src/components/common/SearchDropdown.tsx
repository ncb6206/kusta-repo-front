import React from 'react';
import { IoStar, IoStarOutline, IoClose } from 'react-icons/io5';

import { SearchItem } from '@/types/search';

interface SearchDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onSearchSelect: (searchText: string) => void;
  recentSearches: SearchItem[];
  favorites: SearchItem[];
  addRecentSearch: (searchText: string) => void;
  toggleFavorite: (searchText: string) => void;
  removeRecentSearch: (id: number) => void;
  removeFavorite: (id: number) => void;
}

const SearchDropdown: React.FC<SearchDropdownProps> = ({
  isOpen,
  onSearchSelect,
  recentSearches,
  favorites,
  toggleFavorite,
  removeRecentSearch,
  removeFavorite,
}) => {
  if (!isOpen) return null;

  // 즐겨찾기 여부 확인 함수
  const isFavorite = (item: SearchItem) => {
    return favorites.some((fav) => fav.text === item.text);
  };

  // 아이템 클릭 핸들러
  const handleItemClick = (item: SearchItem) => {
    onSearchSelect(item.text);
  };

  return (
    <div className="absolute top-full right-0 left-0 z-50 mt-2 flex rounded-lg border border-gray-200 bg-white shadow-lg">
      <div className="flex w-full flex-col">
        <div className="rounded-tl-lg border-b bg-gray-50 px-4 py-2 text-xs text-gray-500">
          즐겨찾기
        </div>
        {/* 즐겨찾기 섹션 */}
        {favorites.length > 0 ? (
          <div>
            <div>
              {favorites.map((item) => (
                <div
                  key={item.id}
                  className="group flex items-center border-b border-gray-100 px-4 py-3 last:border-b-0 hover:bg-gray-50"
                >
                  <div className="flex-1 cursor-pointer" onClick={() => handleItemClick(item)}>
                    <div className="text-sm font-medium text-gray-900">{item.text}</div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFavorite(item.id);
                    }}
                    className="p-1 opacity-0 transition-opacity group-hover:opacity-100"
                    title="즐겨찾기 해제"
                  >
                    <IoClose className="text-lg text-gray-400 hover:text-red-500" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-8 text-gray-500">
            <p className="text-sm">검색 기록이 없습니다.</p>
          </div>
        )}
      </div>

      {/* 최근검색 섹션 */}
      <div className="flex w-full flex-col">
        <div className="rounded-tr-lg border-b bg-gray-50 px-4 py-2 text-xs text-gray-500">
          최근검색
        </div>
        {recentSearches.length > 0 ? (
          <div>
            <div>
              {recentSearches.map((item) => (
                <div
                  key={item.id}
                  className="group flex items-center border-b border-gray-100 px-4 py-3 last:border-b-0 hover:bg-gray-50"
                >
                  <div className="flex-1 cursor-pointer" onClick={() => handleItemClick(item)}>
                    <div className="text-sm font-medium text-gray-900">{item.text}</div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(item.text);
                    }}
                    className="mr-2 p-1 opacity-0 transition-opacity group-hover:opacity-100"
                    title={isFavorite(item) ? '즐겨찾기 해제' : '즐겨찾기 추가'}
                  >
                    {isFavorite(item) ? (
                      <IoStar className="text-lg text-yellow-500" />
                    ) : (
                      <IoStarOutline className="text-lg text-gray-400 hover:text-yellow-500" />
                    )}
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeRecentSearch(item.id);
                    }}
                    className="p-1 opacity-0 transition-opacity group-hover:opacity-100"
                    title="삭제"
                  >
                    <IoClose className="text-lg text-gray-400 hover:text-red-500" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-8 text-gray-500">
            <p className="text-sm">검색 기록이 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchDropdown;
