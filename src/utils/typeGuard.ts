/**
 * 타입 가드 유틸리티 함수들
 * 런타임에서 타입 안전성을 보장하기 위한 헬퍼 함수들을 제공합니다
 */

/**
 * 객체에 특정 키가 존재하는지 확인하는 타입 가드 함수
 * 타입 안전한 방식으로 객체의 키 존재 여부를 검사합니다
 * 
 * @param obj 검사할 객체
 * @param key 존재 여부를 확인할 키
 * @return 키가 객체에 존재하면 true, 그렇지 않으면 false
 */
export function hasKeyInObject<T extends object>(
  obj: T,
  key: string | number | symbol,
): key is keyof T {
  return key in obj;
}
