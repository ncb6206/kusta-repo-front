import axios, { AxiosError, AxiosResponse } from 'axios';

import { AXIOS_BASE_URL, HTTP_STATUS_CODE, NETWORK } from '@/constants/api';
import { HTTPError } from './HTTPError';

export const axiosInstance = axios.create({
  baseURL: AXIOS_BASE_URL,
  timeout: NETWORK.TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  (config) => {
    // 개발 환경에서 요청 로깅
    if (import.meta.env.DEV) {
      console.log(`🚀 API 요청: ${config.method?.toUpperCase()} ${config.url}`);
    }

    // 공통 헤더 추가 (필요시)
    // config.headers['X-Client-Version'] = '1.0.0';

    return config;
  },
  (error) => {
    console.error('❌ 요청 에러:', error);
    return Promise.reject(error);
  },
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 개발 환경에서 응답 로깅
    if (import.meta.env.DEV) {
      console.log(
        `✅ API 응답: ${response.config.method?.toUpperCase()} ${response.config.url}`,
        response.data,
      );
    }

    return response;
  },
  (error: AxiosError) => {
    // 개발 환경에서 에러 로깅
    if (import.meta.env.DEV) {
      console.error('❌ API 에러:', error.response?.status, error.response?.data);
    }

    // HTTPError로 변환
    if (error.response) {
      const { status, data } = error.response;
      const message = (data as { message?: string })?.message || error.message;

      throw new HTTPError(status, message);
    }

    // 네트워크 에러 등
    throw new HTTPError(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR, '네트워크 연결을 확인해주세요.');
  },
);
