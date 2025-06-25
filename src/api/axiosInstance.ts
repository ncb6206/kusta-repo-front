/**
 * Axios 인스턴스 설정 및 인터셉터를 관리하는 모듈
 * API 요청/응답 로깅, 에러 처리, 공통 헤더 설정을 담당합니다
 */

import axios, { AxiosError, AxiosResponse } from 'axios';

import { AXIOS_BASE_URL, HTTP_STATUS_CODE, NETWORK } from '@/constants/api';
import { HTTPError } from './HTTPError';

/**
 * 애플리케이션 전체에서 사용할 Axios 인스턴스
 * 기본 URL, 타임아웃, 공통 헤더가 설정되어 있습니다
 */
export const axiosInstance = axios.create({
  baseURL: AXIOS_BASE_URL,
  timeout: NETWORK.TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * 요청 인터셉터 설정
 * 개발 환경에서 요청 로깅 및 공통 헤더 추가를 담당합니다
 */
axiosInstance.interceptors.request.use(
  (config) => {
    // 개발 환경에서만 요청 로깅
    if (import.meta.env.DEV) {
      console.log(`🚀 API 요청: ${config.method?.toUpperCase()} ${config.url}`);
    }

    // 필요시 공통 헤더 추가
    // config.headers['X-Client-Version'] = '1.0.0';

    return config;
  },
  (error: unknown) => {
    console.error('❌ 요청 에러:', error);
    return Promise.reject(error);
  },
);

/**
 * 응답 인터셉터 설정
 * 성공 응답 로깅 및 에러 응답을 HTTPError로 변환합니다
 */
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 개발 환경에서만 응답 로깅
    if (import.meta.env.DEV) {
      console.log(
        `✅ API 응답: ${response.config.method?.toUpperCase()} ${response.config.url}`,
        response.data,
      );
    }

    return response;
  },
  (error: unknown) => {
    // 개발 환경에서만 에러 로깅
    if (import.meta.env.DEV) {
      console.error('❌ API 에러:', error);
    }

    // AxiosError인지 확인 후 HTTPError로 변환
    if (error instanceof AxiosError && error.response) {
      const { status, data } = error.response;
      const message = (data as { message?: string })?.message || error.message;

      throw new HTTPError(status, message);
    }

    // 네트워크 에러 등 기타 에러 처리
    throw new HTTPError(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR, '네트워크 연결을 확인해주세요.');
  },
);
