/**
 * 관리자 페이지에서 사용하는 타입 정의들
 */

/** 공통 엔티티 인터페이스 */
interface BaseEntity {
  /** 고유 식별자 */
  id: string | number;
  /** 생성일시 */
  createdAt?: string;
  /** 수정일시 */
  updatedAt?: string;
  /** 인덱스 시그니처 (useDataManagement 호환성을 위해) */
  [key: string]: unknown;
}

/** 회원 정보 인터페이스 */
interface Member extends BaseEntity {
  /** 회원명 */
  name: string;
  /** 이메일 */
  email: string;
  /** 학번 */
  studentId: string;
  /** 대학교 ID */
  universityId: string | number;
  /** 대학교명 */
  universityName?: string;
  /** 전화번호 */
  phone?: string;
  /** 계정 상태 */
  status: 'active' | 'inactive' | 'suspended';
  /** 가입일 */
  joinDate: string;
  /** 최근 로그인 */
  lastLogin?: string;
}

/** 학교 정보 인터페이스 */
interface School extends BaseEntity {
  /** 학교명 */
  name: string;
  /** 지역 */
  region: string;
  /** 주소 */
  address?: string;
  /** 웹사이트 */
  website?: string;
  /** 등록된 회원 수 */
  memberCount?: number;
  /** 학교 로고 URL */
  logoUrl?: string;
}

/** 대회 정보 인터페이스 */
interface Race extends BaseEntity {
  /** 대회명 */
  name: string;
  /** 대회 설명 */
  description?: string;
  /** 개최일 */
  date: string;
  /** 시작 시간 */
  startTime?: string;
  /** 종료 시간 */
  endTime?: string;
  /** 대회 상태 */
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  /** 참가자 수 */
  participantCount?: number;
  /** 최대 참가자 수 */
  maxParticipants?: number;
  /** 대회 장소 */
  venue?: string;
  /** 상금 정보 */
  prizeInfo?: string;
}

/** 기록 정보 인터페이스 */
interface Record extends BaseEntity {
  /** 대회 ID */
  raceId: string | number;
  /** 대회명 */
  raceName?: string;
  /** 참가자 ID */
  memberId: string | number;
  /** 참가자명 */
  memberName?: string;
  /** 참가자 학교 */
  memberSchool?: string;
  /** 순위 */
  rank: number;
  /** 점수 */
  score: number;
  /** 풀이한 문제 수 */
  solvedProblems?: number;
  /** 총 문제 수 */
  totalProblems?: number;
  /** 소요 시간 (분) */
  timeSpent?: number;
  /** 상금/상품 */
  prize?: string;
  /** 비고 */
  notes?: string;
}

/** 페이지네이션 정보 인터페이스 */
interface PaginationInfo {
  /** 현재 페이지 번호 */
  currentPage: number;
  /** 페이지당 항목 수 */
  pageSize: number;
  /** 전체 항목 수 */
  totalItems: number;
  /** 전체 페이지 수 */
  totalPages: number;
  /** 이전 페이지 존재 여부 */
  hasPrevious: boolean;
  /** 다음 페이지 존재 여부 */
  hasNext: boolean;
}

/** API 응답 인터페이스 */
interface ApiResponse<T> {
  /** 응답 데이터 */
  data: T;
  /** 성공 여부 */
  success: boolean;
  /** 메시지 */
  message?: string;
  /** 페이지네이션 정보 (목록 조회 시) */
  pagination?: PaginationInfo;
}

/** 검색 및 필터 조건 인터페이스 */
interface SearchFilters {
  /** 검색어 */
  search?: string;
  /** 학교 ID */
  schoolId?: string | number;
  /** 상태 */
  status?: string;
  /** 시작일 */
  startDate?: string;
  /** 종료일 */
  endDate?: string;
  /** 정렬 기준 */
  sortBy?: string;
  /** 정렬 방향 */
  sortOrder?: 'asc' | 'desc';
  /** 페이지 번호 */
  page?: number;
  /** 페이지 크기 */
  pageSize?: number;
}

/** 폼 검증 에러 인터페이스 */
interface FormValidationError {
  /** 필드명 */
  field: string;
  /** 에러 메시지 */
  message: string;
}

/** 업로드 파일 정보 인터페이스 */
interface UploadFileInfo {
  /** 파일명 */
  name: string;
  /** 파일 크기 (바이트) */
  size: number;
  /** 파일 타입 */
  type: string;
  /** 업로드 진행률 (0-100) */
  progress?: number;
  /** 업로드 상태 */
  status: 'pending' | 'uploading' | 'completed' | 'error';
  /** 에러 메시지 */
  error?: string;
}

export type {
  BaseEntity,
  Member,
  School,
  Race,
  Record,
  PaginationInfo,
  ApiResponse,
  SearchFilters,
  FormValidationError,
  UploadFileInfo,
}; 