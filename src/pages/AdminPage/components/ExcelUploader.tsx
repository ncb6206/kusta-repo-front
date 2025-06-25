/**
 * 엑셀 파일 업로드 컴포넌트
 * 드래그 앤 드롭 및 파일 선택을 통한 엑셀 파일 업로드 기능을 제공합니다
 */

import { useState, useRef, DragEvent, ChangeEvent } from 'react';

/** ExcelUploader 컴포넌트의 props 인터페이스 */
interface ExcelUploaderProps {
  /** 파일 업로드 완료 시 호출되는 콜백 함수 */
  onFileUpload: (file: File) => void;
  /** 업로드 허용 파일 확장자 */
  acceptedExtensions?: string[];
  /** 최대 파일 크기 (바이트) */
  maxFileSize?: number;
  /** 업로드 영역에 표시할 제목 */
  title?: string;
  /** 업로드 영역에 표시할 설명 */
  description?: string;
}

/**
 * 엑셀 파일 업로드 컴포넌트
 * @param props ExcelUploader 컴포넌트의 props
 * @return JSX 엘리먼트
 */
const ExcelUploader = ({
  onFileUpload,
  acceptedExtensions = ['.xlsx', '.xls', '.csv'],
  maxFileSize = 10 * 1024 * 1024, // 10MB
  title = '엑셀 파일 업로드',
  description = '파일을 드래그하거나 클릭하여 업로드하세요',
}: ExcelUploaderProps) => {
  /** 드래그 오버 상태 */
  const [isDragOver, setIsDragOver] = useState(false);
  /** 파일 입력 참조 */
  const fileInputRef = useRef<HTMLInputElement>(null);

  /**
   * 파일 유효성 검사 함수
   * @param file 검사할 파일
   * @return 유효성 검사 결과와 에러 메시지
   */
  const validateFile = (file: File): { isValid: boolean; error?: string } => {
    // 파일 확장자 검사
    const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
    if (!acceptedExtensions.includes(fileExtension)) {
      return {
        isValid: false,
        error: `지원하지 않는 파일 형식입니다. (${acceptedExtensions.join(', ')})`,
      };
    }

    // 파일 크기 검사
    if (file.size > maxFileSize) {
      const maxSizeMB = (maxFileSize / (1024 * 1024)).toFixed(1);
      return {
        isValid: false,
        error: `파일 크기가 너무 큽니다. (최대 ${maxSizeMB}MB)`,
      };
    }

    return { isValid: true };
  };

  /**
   * 파일 처리 함수
   * @param file 처리할 파일
   */
  const handleFile = (file: File) => {
    const validation = validateFile(file);
    if (!validation.isValid) {
      alert(validation.error);
      return;
    }

    onFileUpload(file);
  };

  /**
   * 드래그 오버 이벤트 핸들러
   * @param e 드래그 이벤트
   */
  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  /**
   * 드래그 리브 이벤트 핸들러
   * @param e 드래그 이벤트
   */
  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  /**
   * 드롭 이벤트 핸들러
   * @param e 드롭 이벤트
   */
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFile(files[0]);
    }
  };

  /**
   * 파일 선택 이벤트 핸들러
   * @param e 파일 입력 이벤트
   */
  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  };

  /**
   * 파일 선택 다이얼로그 열기
   */
  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full">
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
          isDragOver
            ? 'border-blue-500 bg-blue-50'
            : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={openFileDialog}
      >
        <div className="flex flex-col items-center space-y-4">
          {/* 아이콘 */}
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
          </div>

          {/* 텍스트 */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">{title}</h3>
            <p className="text-sm text-gray-500 mb-2">{description}</p>
            <p className="text-xs text-gray-400">
              지원 형식: {acceptedExtensions.join(', ')} | 최대 크기: {(maxFileSize / (1024 * 1024)).toFixed(1)}MB
            </p>
          </div>

          {/* 버튼 */}
          <button
            type="button"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              openFileDialog();
            }}
          >
            파일 선택
          </button>
        </div>
      </div>

      {/* 숨겨진 파일 입력 */}
      <input
        ref={fileInputRef}
        type="file"
        accept={acceptedExtensions.join(',')}
        onChange={handleFileSelect}
        className="hidden"
      />
    </div>
  );
};

export default ExcelUploader; 