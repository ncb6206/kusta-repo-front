import { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage';

import { PATH } from '@/constants/path';

import * as Lazy from '@/router/lazy';

import App from '@/App';

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: PATH.ROOT,
      element: <App />,
      errorElement: <NotFoundPage />,
      children: [
        {
          path: '',
          element: (
            <Suspense>
              <Lazy.MainPage />
            </Suspense>
          ),
        },
        {
          path: PATH.INTRODUCE_SCHOOL,
          element: (
            <Suspense>
              <Lazy.IntroduceSchoolPage />
            </Suspense>
          ),
        },
        {
          path: PATH.ANNOUNCEMENT,
          element: (
            <Suspense>
              <Lazy.AnnouncementPage />
            </Suspense>
          ),
        },
        {
          path: PATH.PROFILE,
          element: (
            <Suspense>
              <Lazy.SearchProfilePage />
            </Suspense>
          ),
        },
        {
          path: PATH.SCHOOL_DETAIL(':schoolId'),
          element: (
            <Suspense>
              <Lazy.SchoolDetailPage />
            </Suspense>
          ),
        },
        {
          path: PATH.ADMIN,
          element: (
            <Suspense>
              <Lazy.AdminPage />
            </Suspense>
          ),
          children: [
            // 기본 리다이렉트
            {
              index: true,
              element: (
                <Suspense>
                  <Lazy.MemberList />
                </Suspense>
              ),
            },
            // 회원 관리
            {
              path: 'member',
              element: (
                <Suspense>
                  <Lazy.MemberList />
                </Suspense>
              ),
            },
            {
              path: 'member/new',
              element: (
                <Suspense>
                  <Lazy.MemberForm />
                </Suspense>
              ),
            },
            {
              path: 'member/:id',
              element: (
                <Suspense>
                  <Lazy.MemberDetail />
                </Suspense>
              ),
            },
            {
              path: 'member/:id/edit',
              element: (
                <Suspense>
                  <Lazy.MemberForm />
                </Suspense>
              ),
            },
            // 학교 관리
            {
              path: 'school',
              element: (
                <Suspense>
                  <Lazy.SchoolList />
                </Suspense>
              ),
            },
            {
              path: 'school/new',
              element: (
                <Suspense>
                  <Lazy.SchoolForm />
                </Suspense>
              ),
            },
            {
              path: 'school/:id',
              element: (
                <Suspense>
                  <Lazy.SchoolDetail />
                </Suspense>
              ),
            },
            {
              path: 'school/:id/edit',
              element: (
                <Suspense>
                  <Lazy.SchoolForm />
                </Suspense>
              ),
            },
            // 기록 관리
            {
              path: 'record',
              element: (
                <Suspense>
                  <Lazy.RecordList />
                </Suspense>
              ),
            },
            {
              path: 'record/new',
              element: (
                <Suspense>
                  <Lazy.RecordForm />
                </Suspense>
              ),
            },
            {
              path: 'record/:id',
              element: (
                <Suspense>
                  <Lazy.RecordDetail />
                </Suspense>
              ),
            },
            {
              path: 'record/:id/edit',
              element: (
                <Suspense>
                  <Lazy.RecordForm />
                </Suspense>
              ),
            },
            // 대회 관리
            {
              path: 'race',
              element: (
                <Suspense>
                  <Lazy.RaceList />
                </Suspense>
              ),
            },
            {
              path: 'race/new',
              element: (
                <Suspense>
                  <Lazy.RaceForm />
                </Suspense>
              ),
            },
            {
              path: 'race/:id',
              element: (
                <Suspense>
                  <Lazy.RaceDetail />
                </Suspense>
              ),
            },
            {
              path: 'race/:id/edit',
              element: (
                <Suspense>
                  <Lazy.RaceForm />
                </Suspense>
              ),
            },
          ],

        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
