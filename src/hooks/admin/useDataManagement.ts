/**
 * 데이터 관리 커스텀 훅
 * CRUD 작업을 위한 공통 로직을 제공합니다
 */

import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

/** 데이터 관리 훅의 제네릭 타입 매개변수 */
interface DataItem {
  /** 데이터 아이템의 고유 ID */
  id: string | number;
  /** 기타 속성들 */
  [key: string]: unknown;
}

/** 데이터 관리 훅의 옵션 인터페이스 */
interface UseDataManagementOptions<T extends DataItem> {
  /** 기본 라우트 경로 (예: '/admin/member') */
  basePath: string;
  /** 데이터를 가져오는 API 함수 */
  fetchData: () => Promise<T[]>;
  /** 단일 데이터를 가져오는 API 함수 */
  fetchItem?: (id: string | number) => Promise<T>;
  /** 데이터를 생성하는 API 함수 */
  createItem?: (data: Partial<T>) => Promise<T>;
  /** 데이터를 업데이트하는 API 함수 */
  updateItem?: (id: string | number, data: Partial<T>) => Promise<T>;
  /** 데이터를 삭제하는 API 함수 */
  deleteItem?: (id: string | number) => Promise<void>;
}

/**
 * 데이터 관리 커스텀 훅
 * @param options 훅 설정 옵션
 * @return 데이터 관리에 필요한 상태와 함수들
 */
const useDataManagement = <T extends DataItem>(options: UseDataManagementOptions<T>) => {
  const { basePath, fetchData, fetchItem, createItem, updateItem, deleteItem } = options;
  const navigate = useNavigate();

  /** 데이터 목록 상태 */
  const [data, setData] = useState<T[]>([]);
  /** 현재 선택된 아이템 상태 */
  const [currentItem, setCurrentItem] = useState<T | null>(null);
  /** 로딩 상태 */
  const [loading, setLoading] = useState(false);
  /** 에러 상태 */
  const [error, setError] = useState<string | null>(null);

  /**
   * 데이터 목록을 불러오는 함수
   */
  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await fetchData();
      setData(result);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : '데이터를 불러오는데 실패했습니다.';
      setError(errorMessage);
      console.error('데이터 로딩 실패:', err);
    } finally {
      setLoading(false);
    }
  }, [fetchData]);

  /**
   * 특정 아이템을 불러오는 함수
   * @param id 아이템 ID
   */
  const loadItem = useCallback(
    async (id: string | number) => {
      if (!fetchItem) {
        console.warn('fetchItem 함수가 제공되지 않았습니다.');
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const item = await fetchItem(id);
        setCurrentItem(item);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : '데이터를 불러오는데 실패했습니다.';
        setError(errorMessage);
        console.error('아이템 로딩 실패:', err);
      } finally {
        setLoading(false);
      }
    },
    [fetchItem]
  );

  /**
   * 새 아이템을 생성하는 함수
   * @param itemData 생성할 아이템 데이터
   */
  const handleCreate = useCallback(
    async (itemData: Partial<T>) => {
      if (!createItem) {
        console.warn('createItem 함수가 제공되지 않았습니다.');
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const newItem = await createItem(itemData);
        setData((prevData) => [...prevData, newItem]);
        navigate(basePath);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : '생성에 실패했습니다.';
        setError(errorMessage);
        console.error('아이템 생성 실패:', err);
      } finally {
        setLoading(false);
      }
    },
    [createItem, navigate, basePath]
  );

  /**
   * 아이템을 업데이트하는 함수
   * @param id 업데이트할 아이템 ID
   * @param itemData 업데이트할 데이터
   */
  const handleUpdate = useCallback(
    async (id: string | number, itemData: Partial<T>) => {
      if (!updateItem) {
        console.warn('updateItem 함수가 제공되지 않았습니다.');
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const updatedItem = await updateItem(id, itemData);
        setData((prevData) => prevData.map((item) => (item.id === id ? updatedItem : item)));
        navigate(basePath);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : '업데이트에 실패했습니다.';
        setError(errorMessage);
        console.error('아이템 업데이트 실패:', err);
      } finally {
        setLoading(false);
      }
    },
    [updateItem, navigate, basePath]
  );

  /**
   * 아이템을 삭제하는 함수
   * @param id 삭제할 아이템 ID
   */
  const handleDelete = useCallback(
    async (id: string | number) => {
      if (!deleteItem) {
        console.warn('deleteItem 함수가 제공되지 않았습니다.');
        return;
      }

      if (!confirm('정말로 삭제하시겠습니까?')) {
        return;
      }

      try {
        setLoading(true);
        setError(null);
        await deleteItem(id);
        setData((prevData) => prevData.filter((item) => item.id !== id));
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : '삭제에 실패했습니다.';
        setError(errorMessage);
        console.error('아이템 삭제 실패:', err);
      } finally {
        setLoading(false);
      }
    },
    [deleteItem]
  );

  /**
   * 목록 페이지로 이동하는 함수
   */
  const navigateToList = useCallback(() => {
    navigate(basePath);
  }, [navigate, basePath]);

  /**
   * 상세 페이지로 이동하는 함수
   * @param id 아이템 ID
   */
  const navigateToDetail = useCallback(
    (id: string | number) => {
      navigate(`${basePath}/${id}`);
    },
    [navigate, basePath]
  );

  /**
   * 편집 페이지로 이동하는 함수
   * @param id 아이템 ID
   */
  const navigateToEdit = useCallback(
    (id: string | number) => {
      navigate(`${basePath}/${id}/edit`);
    },
    [navigate, basePath]
  );

  /**
   * 생성 페이지로 이동하는 함수
   */
  const navigateToCreate = useCallback(() => {
    navigate(`${basePath}/new`);
  }, [navigate, basePath]);

  return {
    // 상태
    data,
    currentItem,
    loading,
    error,
    
    // 데이터 로딩 함수
    loadData,
    loadItem,
    
    // CRUD 함수
    handleCreate,
    handleUpdate,
    handleDelete,
    
    // 네비게이션 함수
    navigateToList,
    navigateToDetail,
    navigateToEdit,
    navigateToCreate,
    
    // 상태 설정 함수 (필요시 직접 조작용)
    setData,
    setCurrentItem,
    setError,
  };
};

export default useDataManagement; 