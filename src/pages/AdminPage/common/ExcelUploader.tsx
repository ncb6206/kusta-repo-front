import { useRef, useState } from 'react';

interface ExcelUploaderProps {
  onDataUpload: (data: Record<string, unknown>[]) => void;
  acceptedTypes: string[];
  placeholder: string;
}

const ExcelUploader = ({ onDataUpload, acceptedTypes, placeholder }: ExcelUploaderProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileSelect = async (file: File) => {
    if (!file) return;

    setIsLoading(true);
    try {
      // 엑셀 파일을 읽어서 데이터로 변환하는 로직
      // 실제로는 xlsx 라이브러리를 사용해야 함
      const mockData: Record<string, unknown>[] = [
        { id: '1', name: '홍길동', university: '서울대학교', studentId: '2021001', email: 'hong@seoul.ac.kr', phone: '010-1234-5678' },
        { id: '2', name: '김철수', university: '연세대학교', studentId: '2021002', email: 'kim@yonsei.ac.kr', phone: '010-2345-6789' },
        { id: '3', name: '이영희', university: '고려대학교', studentId: '2021003', email: 'lee@korea.ac.kr', phone: '010-3456-7890' },
      ];
      
      onDataUpload(mockData);
    } catch (error) {
      console.error('파일 읽기 실패:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  return (
    <div className="w-full">
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          isDragging
            ? 'border-blue-500 bg-blue-50'
            : 'border-gray-300 hover:border-gray-400'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="space-y-4">
          <div className="text-4xl">📊</div>
          <div>
            <p className="text-lg font-medium text-gray-900">{placeholder}</p>
            <p className="text-sm text-gray-500 mt-1">
              지원 형식: {acceptedTypes.join(', ')}
            </p>
          </div>
          
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={isLoading}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isLoading ? '처리 중...' : '파일 선택'}
            </button>
          </div>
          
          <input
            ref={fileInputRef}
            type="file"
            accept={acceptedTypes.join(',')}
            onChange={handleFileInputChange}
            className="hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default ExcelUploader; 