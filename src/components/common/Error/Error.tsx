import { HTTP_ERROR_MESSAGE, HTTP_STATUS_CODE } from '@/constants/api';
import { hasKeyInObject } from '@/utils/typeGuard';

export interface ErrorProps {
  statusCode?: number;
  errorCode?: number;
  resetError?: () => void;
}

const Error = ({ statusCode = HTTP_STATUS_CODE.NOT_FOUND, errorCode, resetError }: ErrorProps) => {
  const currentStatusCode =
    statusCode === HTTP_STATUS_CODE.CONTENT_TOO_LARGE ? HTTP_STATUS_CODE.BAD_REQUEST : statusCode;
  const isHTTPError = hasKeyInObject(HTTP_ERROR_MESSAGE, currentStatusCode);

  console.log(errorCode, isHTTPError);

  return (
    <div className="flex-1 flex-col items-center justify-center">
      <span className="font-extrabold">오류가 발생하였습니다!</span>
      <button onClick={resetError}>에러 리셋하기</button>
    </div>
  );
};

export default Error;
