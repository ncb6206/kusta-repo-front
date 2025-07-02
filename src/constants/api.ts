/**
 * API 관련 상수들을 정의하는 모듈
 * 기본 URL, 엔드포인트, 네트워크 설정, HTTP 상태 코드 및 에러 메시지를 포함합니다
 */

/**
 * 환경에 따른 API Base URL 설정
 * 환경변수에서 프로덕션 URL을 가져오거나 기본값 사용
 */
export const AXIOS_BASE_URL = import.meta.env.VITE_AXIOS_PROD_BASE_URL || 'http://220.76.77.134:8847';

/**
 * API 엔드포인트 경로들을 정의하는 객체
 * 각 엔드포인트는 함수 또는 문자열로 정의됩니다
 */
export const END_POINTS = {
  /** 특정 대학교 정보 조회 */
  UNIVERSITY: (id: string) => `/university/${id}`,
  /** 모든 대학교 목록 조회 */
  UNIVERSITY_ALL: '/university/all',
  /** 대학교 멤버 목록 조회 */
  UNIVERSITY_MEMBER: '/university/memberlist',
  /** 특정 멤버 정보 조회 */
  MEMBER: (id: string) => `/member/${id}`,
  /** 멤버 이름으로 검색 */
  MEMBER_SEARCH: (name: string) => `/member/search?name=${name}`,

  RECORD: (id: string) => `/record/${id}`,
  RACE: (id: string) => `/race/${id}`,
};

/**
 * 네트워크 관련 설정값들
 * 재시도 횟수와 타임아웃 시간을 정의합니다
 */
export const NETWORK = {
  /** API 요청 실패 시 재시도 횟수 */
  RETRY_COUNT: 2,
  /** API 요청 타임아웃 시간 (밀리초) */
  TIMEOUT: 10000,
} as const;

/**
 * HTTP 상태 코드 상수들
 * 자주 사용되는 HTTP 상태 코드들을 정의합니다
 */
export const HTTP_STATUS_CODE = {
  /** 요청 성공 */
  SUCCESS: 200,
  /** 리소스 생성 성공 */
  CREATED: 201,
  /** 요청 성공, 응답 본문 없음 */
  NO_CONTENT: 204,
  /** 잘못된 요청 */
  BAD_REQUEST: 400,
  /** 인증 실패 */
  UNAUTHORIZED: 401,
  /** 리소스를 찾을 수 없음 */
  NOT_FOUND: 404,
  /** 요청 본문이 너무 큼 */
  CONTENT_TOO_LARGE: 413,
  /** 서버 내부 오류 */
  INTERNAL_SERVER_ERROR: 500,
} as const;

/**
 * HTTP 에러별 사용자 친화적 메시지들
 * 각 상태 코드에 대응하는 제목, 본문, 버튼 텍스트를 포함합니다
 */
export const HTTP_ERROR_MESSAGE = {
  [HTTP_STATUS_CODE.NOT_FOUND]: {
    HEADING: '페이지가 없는 것 같습니다.',
    BODY: '요청하신 페이지를 찾을 수 없습니다.',
    BUTTON: '홈으로 가기',
  },
  [HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR]: {
    HEADING: '현재 페이지를 표시할 수 없습니다.',
    BODY: '잠시 후 다시 시도해주세요.',
    BUTTON: '새로고침',
  },
  [HTTP_STATUS_CODE.BAD_REQUEST]: {
    HEADING: '잘못된 요청입니다.',
    BODY: '확인 후 다시 시도해주세요.',
    BUTTON: '홈으로 가기',
  },
} as const;
