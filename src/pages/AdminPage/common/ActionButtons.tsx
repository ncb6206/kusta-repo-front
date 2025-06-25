interface ActionButtonsProps {
  onConvert: () => void;
  onRegister: () => void;
  onDelete: () => void;
  isLoading: boolean;
  hasData: boolean;
  hasConvertedData: boolean;
}

const ActionButtons = ({
  onConvert,
  onRegister,
  onDelete,
  isLoading,
  hasData,
  hasConvertedData,
}: ActionButtonsProps) => {
  return (
    <div className="flex gap-3">
      <button
        onClick={onConvert}
        disabled={!hasData || isLoading}
        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {isLoading ? '변환 중...' : '데이터 변환'}
      </button>
      
      <button
        onClick={onRegister}
        disabled={!hasConvertedData || isLoading}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {isLoading ? '등록 중...' : '등록'}
      </button>
      
      <button
        onClick={onDelete}
        disabled={!hasConvertedData || isLoading}
        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {isLoading ? '삭제 중...' : '삭제'}
      </button>
    </div>
  );
};

export default ActionButtons; 