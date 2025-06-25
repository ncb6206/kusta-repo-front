import { lazy } from 'react';

export const MainPage = lazy(() => import('@/pages/MainPage/MainPage'));

export const AnnouncementPage = lazy(() => import('@/pages/AnnouncementPage/AnnouncementPage'));

export const IntroduceSchoolPage = lazy(
  () => import('@/pages/IntroduceSchoolPage/IntroduceSchoolPage'),
);

export const SchoolDetailPage = lazy(() => import('@/pages/SchoolDetailPage/SchoolDetailPage'));

export const SearchProfilePage = lazy(() => import('@/pages/SearchProfilePage/SearchProfilePage'));

export const AdminPage = lazy(() => import('@/pages/AdminPage/pages'));

// Admin 하위 페이지들
export const MemberList = lazy(() => import('@/pages/AdminPage/member/MemberList'));
export const MemberForm = lazy(() => import('@/pages/AdminPage/member/MemberForm'));
export const MemberDetail = lazy(() => import('@/pages/AdminPage/member/MemberDetail'));

export const SchoolList = lazy(() => import('@/pages/AdminPage/school/SchoolList'));
export const SchoolForm = lazy(() => import('@/pages/AdminPage/school/SchoolForm'));
export const SchoolDetail = lazy(() => import('@/pages/AdminPage/school/SchoolDetail'));

export const RecordList = lazy(() => import('@/pages/AdminPage/record/RecordList'));
export const RecordForm = lazy(() => import('@/pages/AdminPage/record/RecordForm'));
export const RecordDetail = lazy(() => import('@/pages/AdminPage/record/RecordDetail'));

export const RaceList = lazy(() => import('@/pages/AdminPage/race/RaceList'));
export const RaceForm = lazy(() => import('@/pages/AdminPage/race/RaceForm'));
export const RaceDetail = lazy(() => import('@/pages/AdminPage/race/RaceDetail'));
