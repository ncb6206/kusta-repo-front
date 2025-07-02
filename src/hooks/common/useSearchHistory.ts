/**
 * 검색 기록 관리를 위한 커스텀 훅
 * 최근 검색어와 즐겨찾기 검색어를 로컬 스토리지에 저장하고 관리합니다
 */

import { useState } from 'react';

import { SearchItem } from '@/types/search';

/**
 * 검색 기록과 즐겨찾기를 관리하는 커스텀 훅
 * @return 검색 기록 상태와 관련 함수들을 포함한 객체
 */
export const useSearchHistory = () => {
  const [recentSearches, setRecentSearches] = useState<SearchItem[]>(
    JSON.parse(localStorage.getItem('recentSearches') || '[]'),
  );
  const [favorites, setFavorites] = useState<SearchItem[]>(
    JSON.parse(localStorage.getItem('favorites') || '[]'),
  );

  /**
   * 새로운 검색어를 최근 검색 목록에 추가합니다
   * 동일한 검색어가 있으면 맨 앞으로 이동시킵니다
   * @param searchText 추가할 검색어
   */
  const addRecentSearch = (searchText: string): void => {
    const newItem: SearchItem = {
      id: Date.now(),
      text: searchText,
      createdAt: Date.now(),
    };

    const updatedSearches = [newItem, ...recentSearches.filter((item) => item.text !== searchText)];

    setRecentSearches(updatedSearches);
    localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
  };

  /**
   * 검색어를 즐겨찾기에 추가하거나 제거합니다
   * 이미 즐겨찾기에 있으면 제거하고, 없으면 추가합니다
   * @param searchText 토글할 검색어
   */
  const toggleFavorite = (searchText: string): void => {
    const existingIndex = favorites.findIndex((item) => item.text === searchText);

    if (existingIndex >= 0) {
      // 즐겨찾기에서 제거
      const updated = favorites.filter((_, index) => index !== existingIndex);
      setFavorites(updated);
      localStorage.setItem('favorites', JSON.stringify(updated));
    } else {
      // 즐겨찾기에 추가
      const newItem: SearchItem = { 
        id: Date.now(), 
        text: searchText, 
        createdAt: Date.now() 
      };
      const updated = [...favorites, newItem];
      setFavorites(updated);
      localStorage.setItem('favorites', JSON.stringify(updated));
    }
  };

  /**
   * 최근 검색 목록에서 특정 항목을 제거합니다
   * @param id 제거할 검색 항목의 ID
   */
  const removeRecentSearch = (id: number): void => {
    const updated = recentSearches.filter((item) => item.id !== id);
    setRecentSearches(updated);
    localStorage.setItem('recentSearches', JSON.stringify(updated));
  };

  /**
   * 즐겨찾기 목록에서 특정 항목을 제거합니다
   * @param id 제거할 즐겨찾기 항목의 ID
   */
  const removeFavorite = (id: number): void => {
    const updated = favorites.filter((item) => item.id !== id);
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  return {
    recentSearches,
    favorites,
    addRecentSearch,
    toggleFavorite,
    removeRecentSearch,
    removeFavorite,
  };
};
