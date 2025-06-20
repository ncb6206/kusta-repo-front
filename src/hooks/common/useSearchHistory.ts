import { useState } from 'react';

import { SearchItem } from '@/types/search';

// hooks/useSearchHistory.ts
export const useSearchHistory = () => {
  const [recentSearches, setRecentSearches] = useState<SearchItem[]>(
    JSON.parse(localStorage.getItem('recentSearches') || '[]'),
  );
  const [favorites, setFavorites] = useState<SearchItem[]>(
    JSON.parse(localStorage.getItem('favorites') || '[]'),
  );

  const addRecentSearch = (searchText: string) => {
    const newItem: SearchItem = {
      id: Date.now(),
      text: searchText,
      createdAt: Date.now(),
    };

    const updatedSearches = [newItem, ...recentSearches.filter((item) => item.text !== searchText)];

    setRecentSearches(updatedSearches);
    localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
  };

  const toggleFavorite = (searchText: string) => {
    const existingIndex = favorites.findIndex((item) => item.text === searchText);

    if (existingIndex >= 0) {
      // 제거
      const updated = favorites.filter((_, index) => index !== existingIndex);
      setFavorites(updated);
      localStorage.setItem('favorites', JSON.stringify(updated));
    } else {
      // 추가
      const newItem = { id: Date.now(), text: searchText, createdAt: Date.now() };
      const updated = [...favorites, newItem];
      setFavorites(updated);
      localStorage.setItem('favorites', JSON.stringify(updated));
    }
  };

  const removeRecentSearch = (id: number) => {
    const updated = recentSearches.filter((item) => item.id !== id);
    setRecentSearches(updated);
    localStorage.setItem('recentSearches', JSON.stringify(updated));
  };

  const removeFavorite = (id: number) => {
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
