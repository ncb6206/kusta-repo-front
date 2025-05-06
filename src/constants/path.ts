export const PATH = {
  ROOT: '/',
  SEARCH_PROFILE: '/profile',
  INTRODUCE_SCHOOL: '/school',
  ANNOUNCEMENT: '/announcement',
  SCHOOL_DETAIL: (schoolId: string) => `/school/${schoolId}`,
  RELOAD: 0,
} as const;
