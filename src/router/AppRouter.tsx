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
          path: PATH.SEARCH_PROFILE,
          element: (
            <Suspense>
              <Lazy.SearchProfilePage />
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
          path: PATH.SCHOOL_DETAIL(':schoolId'),
          element: (
            <Suspense>
              <Lazy.SchoolDetailPage />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
