import { useState } from 'react';
import ExcelUploader from '../common/ExcelUploader';
import DataViewer from '../common/DataViewer';
import ActionButtons from '../common/ActionButtons';

interface RecordData {
  id: string;
  competitionId: string;
  competitionName: string;
  memberId: string;
  memberName: string;
  university: string;
  rank: number;
  score: number;
  participationDate: string;
}

const RecordManagement = () => {
  const [excelData, setExcelData] = useState<RecordData[]>([]);
  const [convertedData, setConvertedData] = useState<RecordData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleExcelUpload = (data: RecordData[]) => {
    setExcelData(data);
    setConvertedData([]);
  };

  const handleDataConversion = async () => {
    setIsLoading(true);
    try {
      // 백엔드 API 호출하여 데이터 변환
      // const response = await convertRecordData(excelData);
      // setConvertedData(response.data);
      
      // 임시로 동일한 데이터 사용
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
      // 백엔드 API 호출하여 데이터 등록
      // await registerRecords(convertedData);
      console.log('기록 등록 완료:', convertedData);
    } catch (error) {
      console.error('기록 등록 실패:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      // 백엔드 API 호출하여 데이터 삭제
      // await deleteRecords(convertedData.map(r => r.id));
      console.log('기록 삭제 완료');
    } catch (error) {
      console.error('기록 삭제 실패:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">기록 관리</h2>
        
        <ExcelUploader 
          onDataUpload={handleExcelUpload}
          acceptedTypes={['.xlsx', '.xls']}
          placeholder="대회 기록 엑셀 파일을 업로드하세요"
        />
      </div>

      {excelData.length > 0 && (
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">업로드된 데이터</h3>
          <DataViewer data={excelData} />
          
          <div className="mt-4">
            <ActionButtons
              onConvert={handleDataConversion}
              onRegister={handleRegister}
              onDelete={handleDelete}
              isLoading={isLoading}
              hasData={excelData.length > 0}
              hasConvertedData={convertedData.length > 0}
            />
          </div>
        </div>
      )}

      {convertedData.length > 0 && (
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">변환된 데이터</h3>
          <DataViewer data={convertedData} />
        </div>
      )}
    </div>
  );
};

export default RecordManagement; 