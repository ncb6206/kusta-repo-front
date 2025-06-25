export const PATH = {
  ROOT: '/',
  SEARCH_PROFILE: '/profile',
  INTRODUCE_SCHOOL: '/school',
  ANNOUNCEMENT: '/announcement',
  SCHOOL_DETAIL: (schoolId: string) => `/school/${schoolId}`,
  ADMIN: '/admin',
  RELOAD: 0,
} as const;

export const LINK_PATH = {
  KUSTA: 'https://www.kusta.or.kr',
  YOUTUBE: 'https://www.youtube.com/@GO_KUSTA',
  INSTAGRAM: 'https://www.instagram.com/go.kusta',
  FACEBOOK: 'https://www.facebook.com/go.kusta/?locale=ko_KR',
} as const;
