import { lazy } from 'react';

export const MainPage = lazy(() => import('@/pages/MainPage/MainPage'));

export const AnnouncementPage = lazy(() => import('@/pages/AnnouncementPage/AnnouncementPage'));

export const IntroduceSchoolPage = lazy(
  () => import('@/pages/IntroduceSchoolPage/IntroduceSchoolPage'),
);

export const SchoolDetailPage = lazy(() => import('@/pages/SchoolDetailPage/SchoolDetailPage'));

export const SearchProfilePage = lazy(() => import('@/pages/SearchProfilePage/SearchProfilePage'));

export const AdminPage = lazy(() => import('@/pages/AdminPage/AdminPage'));
