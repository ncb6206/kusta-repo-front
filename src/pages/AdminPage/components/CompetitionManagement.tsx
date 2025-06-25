import { useState } from 'react';
import Pagination from '@/components/common/Pagination';
import ExcelUploader from '../common/ExcelUploader';
import DataViewer from '../common/DataViewer';
import ActionButtons from '../common/ActionButtons';

interface CompetitionData {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  location: string;
  maxParticipants: number;
  description: string;
}

const CompetitionManagement = () => {
  const [excelData, setExcelData] = useState<CompetitionData[]>([]);
  const [convertedData, setConvertedData] = useState<CompetitionData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleExcelUpload = (data: CompetitionData[]) => {
    setExcelData(data);
    setConvertedData([]);
    setCurrentPage(1);
  };

  const handleDataConversion = async () => {
    setIsLoading(true);
    try {
      setConvertedData(excelData);
    } catch (error) {
      console.error('데이터 변환 실패:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async () => {
    setIsLoading(true);
    try {
      console.log('대회 등록 완료:', convertedData);
    } catch (error) {
      console.error('대회 등록 실패:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      console.log('대회 삭제 완료');
    } catch (error) {
      console.error('대회 삭제 실패:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const totalPages = Math.ceil(excelData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = excelData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <span>🏆</span>
          대회 관리
        </h2>
        
        <ExcelUploader 
          onDataUpload={handleExcelUpload}
          acceptedTypes={['.xlsx', '.xls']}
          placeholder="대회 정보 엑셀 파일을 업로드하세요"
        />
      </div>

      {excelData.length > 0 && (
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">업로드된 대회 데이터</h3>
            <div className="text-sm text-gray-500">
              총 {excelData.length}개의 대회
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {currentData.map((competition) => (
              <div key={competition.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-lg">{competition.name}</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                      최대 {competition.maxParticipants}명
                    </span>
                  </div>
                  <div className="text-gray-600">{competition.location}</div>
                  <div className="text-sm text-gray-500">
                    {competition.startDate} ~ {competition.endDate}
                  </div>
                  <div className="text-sm text-gray-700">{competition.description}</div>
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center mb-4">
              <Pagination
                current={currentPage}
                total={totalPages}
                onChange={setCurrentPage}
              />
            </div>
          )}

          <div className="mb-4">
            <h4 className="text-md font-medium mb-2">상세 데이터</h4>
            <DataViewer data={currentData} />
          </div>
          
          <ActionButtons
            onConvert={handleDataConversion}
            onRegister={handleRegister}
            onDelete={handleDelete}
            isLoading={isLoading}
            hasData={excelData.length > 0}
            hasConvertedData={convertedData.length > 0}
          />
        </div>
      )}

      {convertedData.length > 0 && (
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4 text-green-700">변환된 데이터</h3>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
            <p className="text-green-800">
              ✅ {convertedData.length}개의 대회 데이터가 성공적으로 변환되었습니다.
            </p>
          </div>
          <DataViewer data={convertedData} />
        </div>
      )}
    </div>
  );
};

export default CompetitionManagement; 